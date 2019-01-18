import axios from 'axios';

/**
 * @typedef Media
 * @property {string} id
 * @property {number} timestamp
 * @property {string} tumbnailSrc
 */
/**
 * @typedef MediaResponse
 * @property {string} last
 * @property {boolean} hasNext
 * @property {Array<Media>} medias
 */

const DEFAULT_PARAMS = {
  count: 10,
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
   * @return {Promise<MediaResponse>}
   */
  async nextMedias() {
    const params = {
      ...DEFAULT_PARAMS,
      last: this.$last,
    };
    const res = await axios.get(`http://localhost:5000/users/${this.$latestId}/medias`, {
      params,
    });
    this.$last = res.data.last || '';
    return res.data;
  }
}
