import {isObservable} from 'rxjs';

import OrganizationsAdapter from './OrganizationsAdapter';

describe('Organizations Adapter Interface', () => {
  let orgsAdapter;

  beforeEach(() => {
    orgsAdapter = new OrganizationsAdapter();
  });

  afterEach(() => {
    orgsAdapter = null;
  });

  describe('getOrg()', () => {
    test('returns an observable', () => {
      expect(isObservable(orgsAdapter.getOrg())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      orgsAdapter.getOrg('msgID').subscribe(
        () => { },
        (error) => {
          expect(error.message).toBe('getOrg(ID) must be defined in OrganizationsAdapter');
          done();
        },
      );
    });
  });
});
