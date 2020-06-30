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
      expect(isObservable(membershipsAdapter.getMembersFromDestination())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      membershipsAdapter.getMembersFromDestination('meetingID', 'meetingType').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe(
            'getMembersFromDestination(destinationID, destinationType) must be defined in MembershipsAdapter'
          );
          done();
        }
      );
    });
  });
});
