import {throwError} from 'rxjs';

import WebexAdapter from './WebexAdapter';

/**
 * MediaStream is a Web API standard that represents a stream of media content, e,g, video, audio.
 *
 * @external  MediaStream
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStream}
 */

/**
 * MediaStreamTrack is a Web API standard that represents a single media track within a stream.
 *
 * @external MediaStreamTrack
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack}
 */

/**
 * An object that represents a media stream and its state.
 *
 * @typedef {object} MeetingStream
 * @property {MediaStream}        stream  The local media share stream
 * @property {MeetingStreamState} state   The local share state @see {@link MeetingStreamState} enum
 */

/**
 * A meeting object that allows users to have a WebRTC meeting.
 *
 * @typedef {object}  Meeting
 * @property {string}            ID           The meeting identifier
 * @property {string}            title        The title of the meeting
 * @property {MediaStreamTrack}  localVideo   The local video stream track
 * @property {MediaStreamTrack}  localAudio   The local audio stream track
 * @property {MeetingStream}     localShare   The local share information
 * @property {MediaStream}       remoteVideo  The remote video stream
 * @property {MediaStream}       remoteAudio  The remote audio stream
 * @property {MediaStream}       remoteShare  The remote media share stream
 * @property {MeetingState}      state        The state of the meeting
 */

/**
 * A control/action that may modify a meeting or meeting state.
 *
 * @typedef {object}  MeetingControl
 * @property {string}                         ID       The meeting control ID or name
 * @property {MeetingControlAction}           action   A function that performs the control action. Must not return a value, as it must perform side-effects only
 * @property {MeetingControlDisplayFunction}  display  A function that returns an observable that emits MeetingControlDisplay objects
 */

/**
 * Action a meeting control performs. It must perform a side-effect only.
 *
 * @typedef {Function}  MeetingControlAction
 * @param {string}  meetingID  ID of the meeting object for which to perform side-effect
 * @returns {void}
 */

/**
 * Function that returns an observable that emits a meeting control display values.
 *
 * @typedef {Function}  MeetingControlDisplayFunction
 * @returns {external:Observable.<MeetingControlDisplay>}
 */

/**
 * Display options of a meeting control.
 *
 * @typedef {object}  MeetingControlDisplay
 * @property {MeetingControlState}  state    Current state of the meeting control
 * @property {string}               tooltip  The text to display when user hovers over control
 * @property {string}               icon     Momentum-ui icon name to display for the meeting control
 * @property {string}               text     Text to display on the meeting control. If there is an icon and text, text takes precedence
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
 * Enum for meeting states.
 * A falsy value for the state (missing/undefined/null) means that the meeting has not been created yet.
 *
 * @readonly
 * @enum {string}
 */
export const MeetingState = {
  NOT_JOINED: 'NOT_JOINED', // the meeting has been created (has an id), but the user has not yet started / joined
  JOINED: 'JOINED', // the user has started / joined the meeting
  LEFT: 'LEFT', // the user has left the meeting
};

/**
 * Enum for media permissions states.
 * A falsy value for the media permission means that it is unknown (eg: the meeting was just created).
 *
 * @readonly
 * @enum {string}
 */
export const MediaPermissions = {
  ASKING: 'ASKING', // set while requesting the user for permission to access media device
  ALLOWED: 'ALLOWED', // set when the user has allowed permission to access media device
  DENIED: 'DENIED', // set when the user has denied access to media device
  DISMISSED: 'DISMISSED', // set when the user has dismissed the media device access prompt without allowing or denying access
  ERROR: 'ERROR', // set when there is an error while requesting access to media device
  IGNORED: 'IGNORED', // set when the user has chosen to not interact with the device access
};

/**
 * Enum for meeting local share state.
 *
 * @readonly
 * @enum {string}
 */
export const MeetingStreamState = {
  ENABLED: 'enabled', // media stream is actively sending data
  DISABLED: 'disabled', // media stream is muted
  ENABLING: 'enabling', // temporary state between DISABLED and ENABLED
  DISABLING: 'disabling', // temporary state between ENABLED and DISABLED
  STOPPED: 'stopped', // media stream has been stopped and can no longer be used
  NOT_AVAILABLE: 'not-available', // media stream cannot be obtained
};

/**
 * This is a base class that defines the interface that maps meetings data.
 * Developers that want to extend `MeetingsAdapter` must implement all of its methods,
 * adhering to the exact parameters and structure of the returned objects.
 *
 * @interface
 */
export default class MeetingsAdapter extends WebexAdapter {
  /**
   * Creates a new instance of the MeetingsAdapter.
   *
   * @param {object} datasource The primary datasource the adapter will be using
   */
  constructor(datasource) {
    super(datasource);

    this.meetingControls = {};
  }

  /**
   * Creates a meeting for the given destination. Returns an observable
   * that emits a Meeting object with the data from the newly created meeting.
   * Observable should complete after emitting data.
   * If there is an issue creating the meeting, the observable will error.
   *
   * @param {string} destination  Virtual location where the meeting will take place
   * @returns {external:Observable.<Meeting>} Observable stream that emits meeting data
   * @memberof MeetingsAdapter
   */
  createMeeting(destination) {
    return throwError(new Error('createMeeting(destination) must be defined in MeetingsAdapter'));
  }

  /**
   * Listens for incoming meetings at the given destination.
   * Returns an observable that emits a Meeting object with the data from the incoming meeting.
   * `incomingMeeting` is mostly used for 1:1 meetings where a user tries to reach another user directly.
   * This method only notifies that someone is trying to start a meeting, but it has to be used in
   * conjunction with `joinMeeting` to actually join the meeting.
   *
   * @param {string} destination  Virtual location where meeting will take place
   * @returns {external:Observable.<Meeting>} Observable stream that emits meeting data
   * @memberof MeetingsAdapter
   */
  incomingMeeting(destination) {
    return throwError(new Error('incomingMeeting(destination) must be defined in MeetingsAdapter'));
  }

  /**
   * Returns an observable that emits a Meeting object.
   * Whenever there is an update to the meeting, the observable
   * will emit a new updated Meeting object, if datasource permits.
   * Observable must complete when the meeting is left
   * (e.g. @see {@link leaveMeeting} triggers an event).
   *
   * @param {string} ID  ID of the meeting to get
   * @returns {external:Observable.<Meeting>} Observable stream that emits meeting data
   * @memberof MeetingsAdapter
   */
  getMeeting(ID) {
    return throwError(new Error('getMeeting(ID) must be defined in MeetingsAdapter'));
  }

  /**
   * Joins the meeting of the given ID.
   * Joining a meeting is performed as a side-effect and this method does not
   * return a value. Instead, joining a meeting should trigger getMeeting to
   * emit a new updated Meeting object.
   *
   * @param {string} ID  ID of the meeting to join
   * @memberof MeetingsAdapter
   */
  joinMeeting(ID) {
    throw new Error('joinMeeting(ID) must be defined in MeetingsAdapter');
  }

  /**
   * Leaves from the meeting of the given ID.
   * Leaving from a meeting is performed as a side-effect and this method does not
   * return a value. Instead, leaving from a meeting should trigger getMeeting to
   * emit a new updated Meeting object.
   * Leaving a meeting should trigger @see {@link getMeeting} to be complete.
   *
   * @param {string} ID  ID of the meeting to leave from
   * @memberof MeetingsAdapter
   */
  leaveMeeting(ID) {
    throw new Error('leaveMeeting(ID) must be defined in MeetingsAdapter');
  }
}
