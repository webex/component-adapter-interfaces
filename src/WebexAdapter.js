/**
 * An observable represents a continuous stream of data.
 * The observables in the Webex Component System are based on RxJS.
 *
 * @external Observable
 * @see {@link https://rxjs-dev.firebaseapp.com/guide/observable}
 */

/**
 * This is a base class that defines the interface that other adapter interfaces extend.
 */
export default class WebexAdapter {
  /**
   * Creates a new instance of the WebexAdapter.
   *
   * @param {object} datasource The primary datasource the adapter will be using
   */
  constructor(datasource) {
    this.datasource = datasource;
  }
}
