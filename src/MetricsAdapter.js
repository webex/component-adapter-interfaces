import WebexAdapter from './WebexAdapter';

/**
 * A metric sent to webex.
 *
 * @typedef  {object} Metric
 * @property {string}  type           type of metric to be captured
 * @property {string}  metricName     name of the metric
 * @property {object}  fields         data to be sent in the metric
 * @property {object}  tags           tags for categorization
 * @property {object}  eventPayload   business metric payload
 */

/**
 * This is a base class that defines the interface that maps activity data.
 * Developers that want to extend `MetricsAdapter` must implement all of its methods,
 * adhering to the exact parameters and structure of the returned objects.
 *
 * @interface
 */
export default class MetricsAdapter extends WebexAdapter {
  /**
   * submit metrics to metric service.
   * This method does not return a value as API returns 204
   *
   * @param {string} eventName  metric name
   * @param {object} props      metric object containing type, fields, tags
   * @param {string} preLoginId pre logged in id if available
   * @memberof MetricsAdapter
   */
  submitMetrics(eventName, props, preLoginId) {
    throw new Error('submitMetrics(eventName, props, preLoginId) must be defined in MetricsAdapter');
  }
}
