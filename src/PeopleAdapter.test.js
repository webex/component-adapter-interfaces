import {isObservable} from 'rxjs';

import PeopleAdapter from './PeopleAdapter';

describe('People Adapter Interface', () => {
  let peopleAdapter;

  beforeEach(() => {
    peopleAdapter = new PeopleAdapter();
  });

  test('getPerson() returns an observable', () => {
    expect(isObservable(peopleAdapter.getPerson())).toBeTruthy();
  });

  test('getPerson() errors because it needs to be defined', (done) => {
    peopleAdapter.getPerson('id').subscribe(
      () => {},
      (error) => {
        expect(error.message).toBe('getPerson(ID) must be defined in PeopleAdapter');
        done();
      }
    );
  });

  afterEach(() => {
    peopleAdapter = null;
  });
});
