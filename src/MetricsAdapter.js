import WebexAdapter from './WebexAdapter';

/**
 * A metric sent to webex.
 *
 * @typedef  {object}     Metric
 * @property {MetricType} type          The type of metric to be captured
 * @property {string}     name          The metric name
 * @property {object}     fields        The data to be sent in metric
 * @property {object}     tags          Tags for categorization
 * @property {object}     eventPayload  Business metric payload
 */

/**
 * All potential types of a metric.
 *
 * @readonly
 * @enum {string}
 */
export const MetricType = {
  BEHAVIORAL: 'behavioral',
  BUSINESS: 'business',
  OPERATIONAL: 'operational',
};

/**
 * This is a base class that defines the interface for sending metrics.
 * Developers that want to extend `MetricsAdapter` must implement all of its methods,
 * adhering to the exact parameters and structure of the returned objects.
 *
 * @interface
 */
export default class MetricsAdapter extends WebexAdapter {
  /**
   * submit metrics to metric service.
   *
   * @param {Metric} metric      metric object containing type, fields, tags
   * @param {string} [preLoginId]  pre logged in id if available
   * @returns {Promise|undefined}
   * @memberof MetricsAdapter
   */
  submitMetrics(metric, preLoginId) {
    throw new Error('submitMetrics(metric, preLoginId) must be defined in MetricsAdapter');
  }
}
