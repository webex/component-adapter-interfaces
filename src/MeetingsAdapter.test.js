import {isObservable} from 'rxjs';

import MeetingsAdapter from './MeetingsAdapter';

describe('Meetings Adapter Interface', () => {
  let meetingsAdapter;

  beforeEach(() => {
    meetingsAdapter = new MeetingsAdapter();
  });

  afterEach(() => {
    meetingsAdapter = null;
  });

  describe('getMeeting()', () => {
    test('returns an observable', () => {
      expect(isObservable(meetingsAdapter.getMeeting())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      meetingsAdapter.getMeeting('meetingID').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('getMeeting(ID) must be defined in MeetingsAdapter');
          done();
        }
      );
    });
  });

  describe('addLocalMedia()', () => {
    test('errors because it needs to be defined', () => {
      try {
        meetingsAdapter.addLocalMedia('meetingID');
      } catch (error) {
        expect(error.message).toBe('addMediaLocal(ID) must be defined in MeetingsAdapter');
      }
    });
  });

  test('meetingControls property exists', () => {
    expect(meetingsAdapter).toHaveProperty('meetingControls');
  });
});
