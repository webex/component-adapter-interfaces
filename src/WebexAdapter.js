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

  /**
   * Connects the adapter to its datasource.
   *
   * @returns {Promise} A promise that resolves when the adapter finishes connecting
   */
  connect() {
    return Promise.reject(
      new Error('connect() must be defined in WebexAdapter'),
    );
  }

  /**
   * Disconnects the adapter from its datasource.
   *
   * @returns {Promise} A promise that resolves when the adapter finishes disconnecting
   */
  disconnect() {
    return Promise.reject(
      new Error('disconnect() must be defined in WebexAdapter'),
    );
  }
}
