import {isObservable} from 'rxjs';

import RoomsAdapter from './RoomsAdapter';

describe('Rooms Adapter Interface', () => {
  let roomsAdapter;

  beforeEach(() => {
    roomsAdapter = new RoomsAdapter();
  });

  afterEach(() => {
    roomsAdapter = null;
  });

  describe('getRoom()', () => {
    test('returns an observable', () => {
      expect(isObservable(roomsAdapter.getRoom())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      roomsAdapter.getRoom('ID').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getRoom(ID) must be defined in RoomsAdapter');
          done();
        },
      );
    });
  });

  describe('getRoomActivities()', () => {
    test('returns an observable', () => {
      expect(isObservable(roomsAdapter.getRoomActivities())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      roomsAdapter.getRoomActivities('id').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getRoomActivities(ID) must be defined in RoomsAdapter');
          done();
        },
      );
    });
  });

  describe('getPreviousRoomActivities()', () => {
    test('returns an observable', () => {
      expect(isObservable(roomsAdapter.getRoomActivities())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      roomsAdapter.getPreviousRoomActivities('id').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getPreviousRoomActivities(ID) must be defined in RoomsAdapter');
          done();
        },
      );
    });
  });

  describe('hasMoreActivities()', () => {
    test('errors because it needs to be defined', () => {
      try {
        expect(roomsAdapter.hasMoreActivities('ID')).toThrow();
        // eslint-disable-next-line no-empty
      } catch (error) {}
    });
  });
});
