const axios = require('axios').default;
const md5 = require('md5');

const URL_INSTAGRAM_BASE = 'https://www.instagram.com/';
const PATH_INSTAGRAM_GRAPHQL = '/graphql/query';
const REGEX_SHARED_DATA = /window._sharedData\s=\s(.*?);<\/script>/;
const QHASH_MEDIAS = '42323d64886122307be10013ad2dcc44';
const QHASH_MEDIA_DETAIL = '2cc8bfb89429345060d1212147913582';
const PARAM_BASE_MEDIA_DETAIL = {
  child_comment_count: 3,
  fetch_comment_count: 40,
  parent_comment_count: 24,
  has_threaded_comments: false,
};

module.exports = class PrivateInstagramGraphApi {
  constructor() {
    this.$axiosInstance = axios.create({
      baseURL: URL_INSTAGRAM_BASE,
    });
    this.$rhxGis = '';
    this.$hiddenId = '';
  }

  /**
   * Instagram Graph API를 사용하기 위한 사전 데이터를 준비함
   * @param {string} id Instagram ID
   * @return {Promise<void>}
   */
  async $fetchData(id) {
    if (this.$hidden !== id) {
      const result = (await this.$axiosInstance.get(`/${id}/`)).data;
      const sharedData = JSON.parse(result.match(REGEX_SHARED_DATA)[1]);
      this.$rhxGis = sharedData.rhx_gis;
      this.$hiddenId = sharedData.entry_data.ProfilePage[0].graphql.user.id;
    }
  }

  /**
   * Instagram Graph API 요청
   * @param {string} queryHash graph query hash
   * @param {string} hiddenId user hidden id
   * @param {any} params parameters as object
   * @return {Promise<any>}
   */
  async $request(queryHash, hiddenId, params) {
    await this.$fetchData(hiddenId);

    const variablesEncoded = JSON.stringify({
      id: this.$hiddenId,
      ...params,
    });
    const axiosParams = {
      query_hash: queryHash,
      variables: variablesEncoded,
    };
    const xInstagramGis = md5(`${this.$rhxGis}:${variablesEncoded}`);
    const headers = {
      'X-Instagram-GIS': xInstagramGis,
    };
    const result = (await this.$axiosInstance.get(
      PATH_INSTAGRAM_GRAPHQL, {
        headers, params: axiosParams,
      },
    )).data;
    return result;
  }

  /**
   * @param {string} id Instagram ID
   * @param {number} count 갯수
   * @param {string} cursor last media cursor
   * @return {Promise<MediaResponse>}
   * 더 이상 없다면 빈 배열 반환
   */
  async nextMedias(id, count = 20, cursor = '') {
    const result = await this.$request(
      QHASH_MEDIAS,
      id,
      {
        first: count,
        after: cursor,
      },
    );
    const body = result.data.user.edge_owner_to_timeline_media;
    const { end_cursor: last, has_next_page: hasNext } = body.page_info;
    const medias = body.edges.map(edge => ({
      id: edge.node.shortcode,
      timestamp: edge.node.taken_at_timestamp,
      tumbnailSrc: edge.node.display_url,
    }));

    return {
      last,
      hasNext,
      medias,
    };
  }

  /**
   * @param {string} id Instagram ID
   * @param {string} mediaId Instagram Media ID
   * @return {Promise<MediaInfo>}
   */
  async mediaInfo(id, mediaId) {
    const result = await this.$request(
      QHASH_MEDIA_DETAIL,
      id,
      {
        shortcode: mediaId,
        ...PARAM_BASE_MEDIA_DETAIL,
      },
    );
    const body = result.data.shortcode_media;
    const mediaSrc = body.display_url;
    const { text } = body.edge_media_to_caption.edges[0].node;
    const comments = body.edge_media_to_comment.edges.map(item => ({
      userId: item.node.owner.username,
      userProfileSrc: item.node.owner.profile_pic_url,
      timestamp: item.node.created_at,
      text: item.node.text,
    }));

    return {
      mediaSrc,
      text,
      comments,
    };
  }
};
