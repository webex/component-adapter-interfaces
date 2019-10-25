import {throwError} from 'rxjs';

import WebexAdapter from './WebexAdapter';

/**
 * A meeting object that allows users to have a WebRTC meeting.
 *
 * @typedef {Object}  Meeting
 * @property {string}            ID The meeting identifier.
 * @property {string}            title The title of the meeting.
 * @property {string}            startTime The time and date of the start of the meeting. Must be a valid date-time string.
 * @property {string}            endTime The time and date of the end of the meeting. Must be a valid date-time string.
 * @property {MediaStreamTrack}  localVideo The local video stream track.
 * @property {MediaStreamTrack}  localAudio The local audio stream track.
 * @property {MediaStream}       localShare The local media share stream.
 * @property {MediaStreamTrack}  remoteVideo The remote video stream track.
 * @property {MediaStreamTrack}  remoteAudio The remote audio stream track.
 * @property {MediaStream}       remoteShare The remote media share stream.
 */

/**
 * The control that may modify a meeting or meeting state.
 *
 * @typedef {Object}  MeetingControl
 * @property {string}    ID The meeting control ID or name.
 * @property {string}    alt The text to display when user hovers over control.
 * @property {function}  action A function that performs the control action. Must return a `MeetingControlState` value.
 * @property {string}    icon Momentum-ui icon name to display for the meeting control.
 * @property {string}    text Text to display on the meeting control. If there is an icon and text, text takes precedence.
 */

/**
 * Enum for meeting control states.
 *
 * @readonly
 * @enum {string}
 */
export const MeetingControlState = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  DISABLED: 'disabled',
};

/**
 * This is a base class that defines the interface that maps meetings data.
 * Developers that want to extend `MeetingsAdapter` must implement all of its methods,
 * adhering to the exact parameters and structure of the returned objects.
 */
export default class MeetingsAdapter extends WebexAdapter {
  /**
   * Creates a new instance of the MeetingsAdapter.
   *
   * @param {Object} datasource The primary datasource the adapter will be using.
   */
  constructor(datasource) {
    super(datasource);

    this.meetingControls = {};
  }

  /**
   * Returns an observable that emits a Meeting object.
   * Whenever there is an update to the meeting, the observable
   * will emit a new updated Meeting object, if datasource permits.
   *
   * @param {string} ID  ID of the meeting to get.
   * @returns {Observable.<Meeting>}
   * @memberof MeetingsAdapter
   */
  getMeeting(ID) {
    return throwError(new Error('getMeeting(ID) must be defined in MeetingsAdapter'));
  }
}
