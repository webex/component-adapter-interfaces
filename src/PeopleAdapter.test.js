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
        },
      );
    });
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
        },
      );
    });
  });

  describe('searchPeople()', () => {
    test('returns an observable', () => {
      expect(isObservable(peopleAdapter.searchPeople())).toBeTruthy();
    });

    test('returns error because searchPeople needs to be defined', (done) => {
      peopleAdapter.searchPeople('query').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('searchPeople(query) must be defined in PeopleAdapter');
          done();
        },
      );
    });
  });
});
