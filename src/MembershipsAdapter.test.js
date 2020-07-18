import {isObservable} from 'rxjs';

import MembershipsAdapter from './MembershipsAdapter';

describe('Memberships Adapter Interface', () => {
  let membershipsAdapter;

  beforeEach(() => {
    membershipsAdapter = new MembershipsAdapter();
  });

  afterEach(() => {
    membershipsAdapter = null;
  });

  describe('getMembership()', () => {
    test('returns an observable', () => {
      const methodUnderTest = membershipsAdapter.getMembersFromDestination();

      expect(isObservable(methodUnderTest)).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      const message = 'getMembersFromDestination(destinationID, destinationType) must be defined in MembershipsAdapter';

      membershipsAdapter.getMembersFromDestination('meetingID', 'meetingType').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe(message);
          done();
        },
      );
    });
  });
});
