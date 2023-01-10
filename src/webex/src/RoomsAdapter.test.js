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

  describe('createRoom()', () => {
    test('returns an observable', () => {
      expect(isObservable(roomsAdapter.createRoom())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      const room = {
        title: 'test space',
      };

      roomsAdapter.createRoom(room).subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('createRoom(room) must be defined in RoomsAdapter');
          done();
        },
      );
    });
  });

  describe('getActivitiesInRealTime()', () => {
    test('returns an observable', () => {
      expect(isObservable(roomsAdapter.getActivitiesInRealTime())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      roomsAdapter.getActivitiesInRealTime('id').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getActivitiesInRealTime(ID) must be defined in RoomsAdapter');
          done();
        },
      );
    });
  });

  describe('getPastActivities()', () => {
    test('returns an observable', () => {
      expect(isObservable(roomsAdapter.getActivitiesInRealTime())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      roomsAdapter.getPastActivities('id').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getPastActivities(ID) must be defined in RoomsAdapter');
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
