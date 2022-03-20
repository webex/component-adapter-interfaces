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

  describe('getMembersFromDestination()', () => {
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

  describe('addMembersToRoom()', () => {
    const members = {
      roomId: 'roomId',
      personEmail: ['brenda@acme11.com'],
      isModerator: false,
    };

    test('returns an observable', () => {
      expect(isObservable(membershipsAdapter.addMembersToRoom(members))).toBeTruthy();
    });

    test('returns error because addMembersToRoom needs to be defined', (done) => {
      const message = 'addMembersToRoom must be defined in Membership adapter';

      membershipsAdapter.addMembersToRoom(members).subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe(message);
          done();
        },
      );
    });
  });
});
