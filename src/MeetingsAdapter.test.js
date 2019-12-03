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

  test('getMeeting() returns an observable', () => {
    expect(isObservable(meetingsAdapter.getMeeting())).toBeTruthy();
  });

  test('getMeeting() errors because it needs to be defined', (done) => {
    meetingsAdapter.getMeeting('msgID').subscribe(
      () => {},
      (error) => {
        expect(error.message).toBe('getMeeting(ID) must be defined in MeetingsAdapter');
        done();
      }
    );
  });

  test('meetingControls property exists', () => {
    expect(meetingsAdapter).toHaveProperty('meetingControls');
  });
});
