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

    test('errors because it needs to be defined', (done) => {
      const message = 'submitMetrics(metric, preLoginID) must be defined in MetricsAdapter';

      metricsAdapter.submitMetrics(eventName, mockMetric).subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe(message);
          done();
        },
      );
    });
  });
});
