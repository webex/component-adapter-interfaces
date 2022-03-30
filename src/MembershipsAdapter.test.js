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

  describe('addRoomMember()', () => {
    test('returns an observable', () => {
      const methodUnderTest = membershipsAdapter.addRoomMember();

      expect(isObservable(methodUnderTest)).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      const message = 'addRoomMember(personID, roomID) must be defined in MembershipsAdapter';

      membershipsAdapter.addRoomMember('personID', 'roomID').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe(message);
          done();
        },
      );
    });
  });

  describe('removeRoomMember()', () => {
    test('returns an observable', () => {
      const methodUnderTest = membershipsAdapter.removeRoomMember();

      expect(isObservable(methodUnderTest)).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      const message = 'removeRoomMember(personID, roomID) must be defined in MembershipsAdapter';

      membershipsAdapter.removeRoomMember('personID', 'roomID').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe(message);
          done();
        },
      );
    });
  });
});
