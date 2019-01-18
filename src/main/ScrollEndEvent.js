import { fromEvent, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export default class ScrollEndEvent extends Observable {
  /**
   * @param {Window} window
   * @param {number} margin default: 100
   */
  constructor(window, margin = 100) {
    super();
    this.source = fromEvent(window, 'scroll').pipe(
      filter(() => (
        window.scrollY + window.innerHeight + margin > document.body.scrollHeight
      )),
    );
  }
}
