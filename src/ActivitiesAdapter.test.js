import {isObservable} from 'rxjs';

import ActivitiesAdapter from './ActivitiesAdapter';

describe('Activities Adapter Interface', () => {
  let activitiesAdapter;

  beforeEach(() => {
    activitiesAdapter = new ActivitiesAdapter();
  });

  afterEach(() => {
    activitiesAdapter = null;
  });

  describe('getActivity()', () => {
    test('returns an observable', () => {
      expect(isObservable(activitiesAdapter.getActivity())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      activitiesAdapter.getActivity('msgID').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getActivity(ID) must be defined in ActivitiesAdapter');
          done();
        },
      );
    });
  });
});
