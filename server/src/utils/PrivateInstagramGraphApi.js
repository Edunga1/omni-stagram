const axios = require('axios');
const md5 = require('md5');

const URL_INSTAGRAM_BASE = 'https://www.instagram.com/';
const PATH_INSTAGRAM_GRAPHQL = '/graphql/query';
const REGEX_SHARED_DATA = /window._sharedData\s=\s(.*?);<\/script>/;
const PARAM_QUERY_HASH = '42323d64886122307be10013ad2dcc44';
const VARIABLES_BASE = {
  include_reel: true,
  fetch_mutual: false,
};

module.exports = class PrivateInstagramGraphApi {
  constructor() {
    this.$axiosInstance = axios.create({
      baseURL: URL_INSTAGRAM_BASE,
    });
    this.$rhxGis = '';
    this.$latestId = '';
    this.$latestHiddenId = '';
    this.$after = '';
  }

  /**
   * User Agent로 rhx gis 값을 얻음
   * @param {string} id Instagram ID
   * @return {Promise<SharedData>}
   */
  async $getSharedData(id) {
    const result = (await this.$axiosInstance.get(`/${id}/`)).data;
    return JSON.parse(result.match(REGEX_SHARED_DATA)[1]);
  }

  /**
   * @param {string} id Instagram ID
   * @return {Promise<void>}
   */
  async $fillSharedData(id) {
    const sharedData = await this.$getSharedData(id);
    this.$latestId = id;
    this.$latestHiddenId = sharedData.entry_data.ProfilePage[0].graphql.user.id;
    this.$rhxGis = sharedData.rhx_gis;
  }

  /**
   * Instagram GraphQL로 부터 미디어 목록을 얻음
   * @param {string} rhxGis
   * @param {string} hiddenId Instagram Hidden ID
   * @param {number} count 갯수
   * @param {string} lastMediaId 마지막 미디어 ID
   */
  async $getMedias(rhxGis, hiddenId, count, lastMediaId = '') {
    const variablesEncoded = JSON.stringify({
      ...VARIABLES_BASE,
      id: hiddenId,
      first: count,
      after: lastMediaId,
    });
    const params = {
      query_hash: PARAM_QUERY_HASH,
      variables: variablesEncoded,
    };
    const xInstagramGis = md5(`${rhxGis}:${variablesEncoded}`);
    const headers = {
      'X-Instagram-GIS': xInstagramGis,
    };
    const result = (await this.$axiosInstance.get(
      PATH_INSTAGRAM_GRAPHQL, {
        headers, params,
      },
    )).data;
    return result;
  }

  /**
   * @param {string} id Instagram ID
   * @param {number} count 갯수
   * @return {Promise<MediaResponse>}
   * 더 이상 없다면 빈 배열 반환
   */
  async nextMedias(id, count = 20) {
    if (!this.$rhxGis || this.$latestId !== id) {
      await this.$fillSharedData(id);
    }

    const result = await this.$getMedias(this.$rhxGis, this.$latestHiddenId, count);
    const body = result.data.user.edge_owner_to_timeline_media;
    const { end_cursor: last, has_next_page: hasNext } = body.page_info;
    const medias = body.edges.map(edge => ({
      id: edge.node.id,
      timestamp: edge.node.taken_at_timestamp,
      tumbnailSrc: edge.node.thumbnail_src,
    }));

    return {
      last,
      hasNext,
      medias,
    };
  }
};
