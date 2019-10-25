/**
 * This is a base class that defines the interface that other adapter interfaces extend.
 */
export default class WebexAdapter {
  /**
   * Creates a new instance of the WebexAdapter.
   * @param {Object} datasource The primary datasource the adapter will be using.
   */
  constructor(datasource) {
    this.datasource = datasource;
  }
}
