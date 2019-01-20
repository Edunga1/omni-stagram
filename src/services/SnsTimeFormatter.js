const MS_SECOND = 1000;
const MS_MINUTE = 60000;
const MS_HOUR = 3600000;
const MS_DAY = 86400000;
const MS_SECONDS_CL = 60000;
const MS_MINUTES_CL = 3600000;
const MS_HOURS_CL = 86400000;
const MS_DAYS_CL = 2592000000;

export default class SnsTimeFormatter {
  /**
   * @param {Date} time the time to transform
   */
  constructor(time) {
    this.time = time;
  }

  /**
   * @param {Date} baseTime
   * @return {string}
   */
  parseBy(baseTime) {
    const { time } = this;
    const diff = baseTime - time;
    let transformed = '';

    if (diff < MS_SECONDS_CL) {
      transformed = `${Math.floor(diff / MS_SECOND)}초 전`;
    } else if (diff < MS_MINUTES_CL) {
      transformed = `${Math.floor(diff / MS_MINUTE)}분 전`;
    } else if (diff < MS_HOURS_CL) {
      transformed = `${Math.floor(diff / MS_HOUR)}시간 전`;
    } else if (diff < MS_DAYS_CL) {
      transformed = `${Math.floor(diff / MS_DAY)}일 전`;
    } else {
      transformed = `${time.getMonth() + 1}/${time.getDate()}`;
    }

    return transformed;
  }
}
