import axios from 'axios';

/**
 * @typedef Media
 * @property {string} id
 * @property {number} timestamp
 * @property {string} tumbnailSrc
 */
/**
 * @typedef Comment
 * @property {string} text
 * @property {number} timestamp
 * @property {string} userId
 * @property {string} userProfileSrc
 */
/**
 * @typedef Detail
 * @property {string} mediaSrc
 * @property {string} text
 * @property {Array<Comment>} comments
 */

const DEFAULT_PARAMS = {
  count: 20,
};

export default class InstagramRepository {
  constructor(id = '') {
    this.$latestId = id;
    this.$last = '';
  }

  /**
   * @param {string} id Instagram ID
   * @return {boolean} 업데이트 여부
   */
  setInstagramId(id) {
    let res = false;
    if (this.$latestId !== id) {
      this.$latestId = id;
      this.$last = '';
      res = true;
    }
    return res;
  }

  /**
   * @return {Promise<Array<Media>>}
   * 결과가 없으면 빈 배열 반환
   */
  async nextMedias() {
    let medias = [];
    const params = {
      ...DEFAULT_PARAMS,
      last: this.$last,
    };
    const res = await axios.get(
      `http://localhost:5000/users/${this.$latestId}/medias`, { params },
    ).catch(() => null);

    if (res) {
      this.$last = res.data.last;
      medias = medias.concat(res.data.medias);
    }

    return medias;
  }

  /**
   * @param {string} media media id
   * @return {Promise<Detail>}
   */
  async detail(media) {
    const res = await axios.get(
      `http://localhost:5000/users/${this.$latestId}/medias/${media}`,
    ).then(response => (
      response.data
    )).catch(() => null);
    return res;
  }
}
