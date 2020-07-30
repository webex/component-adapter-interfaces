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

  describe('createMeeting()', () => {
    test('returns an observable', () => {
      expect(isObservable(meetingsAdapter.createMeeting())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      meetingsAdapter.createMeeting('sipURI@webex.com').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('createMeeting(destination) must be defined in MeetingsAdapter');
          done();
        },
      );
    });
  });

  describe('incomingMeeting()', () => {
    test('returns an observable', () => {
      expect(isObservable(meetingsAdapter.incomingMeeting())).toBeTruthy();
    });

    test('errors because it needs to be defined', (done) => {
      meetingsAdapter.incomingMeeting('sipURI@webex.com').subscribe(
        () => {},
        (error) => {
          expect(error.message).toBe('incomingMeeting(destination) must be defined in MeetingsAdapter');
          done();
        },
      );
    });
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
        },
      );
    });
  });

  describe('joinMeeting()', () => {
    test('errors because it needs to be defined', () => {
      expect(() => meetingsAdapter.joinMeeting('meetingID')).toThrow('joinMeeting(ID) must be defined in MeetingsAdapter');
    });
  });

  describe('leaveMeeting()', () => {
    test('errors because it needs to be defined', () => {
      expect(() => meetingsAdapter.leaveMeeting('meetingID')).toThrow('leaveMeeting(ID) must be defined in MeetingsAdapter');
    });
  });
});
