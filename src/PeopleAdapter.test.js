import {isObservable} from 'rxjs';

import PeopleAdapter from './PeopleAdapter';

describe('People Adapter Interface', () => {
  let peopleAdapter;

  beforeEach(() => {
    peopleAdapter = new PeopleAdapter();
  });

  afterEach(() => {
    peopleAdapter = null;
  });

  describe('getPerson()', () => {
    test('returns an observable', () => {
      expect(isObservable(peopleAdapter.getPerson())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      peopleAdapter.getPerson('id').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getPerson(ID) must be defined in PeopleAdapter');
          done();
        }
      );
    });
  });

  describe('getMe()', () => {
    test('returns an observable', () => {
      expect(isObservable(peopleAdapter.getMe())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      peopleAdapter.getMe().subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getMe() must be defined in PeopleAdapter');
          done();
        }
      );
    });
  });
});
