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

export default class InstagramRepository {
  constructor(id = '') {
    this.$latestId = id;
    this.$last = '';
  }

  /**
   * @param {string} id Instagram ID
   * @return {InstagramRepository} this reference
   */
  setInstagramId(id) {
    if (this.$latestId !== id) {
      this.$latestId = id;
      this.$last = '';
    }
    return this;
  }

  /**
   * @return {Promise<MediaResponse>}
   */
  async nextMedias() {
    const res = await axios.get(`http://localhost:5000/users/${this.$latestId}/medias`);
    return res.data;
  }
}
