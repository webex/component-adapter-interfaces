import MetricsAdapter from './MetricsAdapter';

describe('Metrics Adapter Interface', () => {
  let metricsAdapter;

  beforeEach(() => {
    metricsAdapter = new MetricsAdapter();
  });

  afterEach(() => {
    metricsAdapter = null;
  });

  describe('submitMetrics()', () => {
    const eventName = 'test_event';
    const mockMetric = {
      fields: {
        testField: 123,
      },
      tags: {
        testTag: 'tag value',
      },
      metricName: eventName,
      type: 'behavioral',
      eventPayload: {value: 'splunk business metric payload'},
    };

    test('errors because it needs to be defined', () => {
      expect(() => metricsAdapter.submitMetrics(eventName, mockMetric)).toThrow('submitMetrics(metric, preLoginId) must be defined in MetricsAdapter');
    });
  });
});
