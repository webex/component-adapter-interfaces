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

  describe('createMeeting()', () => {
    test('returns an observable', () => {
      expect(isObservable(meetingsAdapter.createMeeting())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      meetingsAdapter.createMeeting('sipURI@webex.com').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('createMeeting(ID) must be defined in MeetingsAdapter');
          done();
        }
      );
    });
  });

  describe('joinMeeting()', () => {
    test('errors because it needs to be defined', () => {
      try {
        meetingsAdapter.joinMeeting('meetingID');
      } catch (error) {
        expect(error.message).toBe('joinMeeting(ID) must be defined in MeetingsAdapter');
      }
    });
  });

  describe('leaveMeeting()', () => {
    test('errors because it needs to be defined', () => {
      try {
        meetingsAdapter.leaveMeeting('meetingID');
      } catch (error) {
        expect(error.message).toBe('leaveMeeting(ID) must be defined in MeetingsAdapter');
      }
    });
  });
});
