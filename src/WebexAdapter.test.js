import WebexAdapter from './WebexAdapter';

describe('Webex Adapter Interface', () => {
  let webexAdapter;
  let datasource;

  beforeEach(() => {
    datasource = 'WebexAdapterDataSource';
    webexAdapter = new WebexAdapter(datasource);
  });

  afterEach(() => {
    webexAdapter = null;
  });

  test('stores data source', () => {
    expect(webexAdapter.datasource).toBe(datasource);
  });
});
