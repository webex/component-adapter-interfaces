import {throwError} from 'rxjs';

import WebexAdapter from './WebexAdapter';

/**
 * An attachment of an activity in Webex.
 *
 * @typedef  {object} ActivityAttachment
 * @property {string} contentType  Content type of the Attachment
 * @property {string} content      Attachment content
 */

/**
 * An activity a person performs in Webex.
 *
 * @typedef  {object} Activity
 * @property {string}                    ID             The activity identifier
 * @property {string}                    roomID         ID of the room where the activity happens
 * @property {string}                    text           Any text the activity may contain
 * @property {string}                    personID       ID of the person performing the activity
 * @property {Array<object>}             cards          Adaptive cards (parsed)
 * @property {Date}                      created        Timestamp of the time when the activity happened
 * @property {boolean}                   displayAuthor  Whether to display author information or not
 * @property {Array<ActivityAttachment>} attachments    Attachments
 */

/**
 * This is a base class that defines the interface that maps activity data.
 * Developers that want to extend `ActivitiesAdapter` must implement all of its methods,
 * adhering to the exact parameters and structure of the returned objects.
 *
 * @interface
 */
export default class ActivitiesAdapter extends WebexAdapter {
  /**
   * Returns an observable that emits activity data of the given ID.
   *
   * @param {string} ID  ID of the activity to get
   * @returns {external:Observable.<Activity>} Observable stream that emits activity data
   * @memberof ActivityAdapter
   */
  getActivity(ID) {
    return throwError(new Error('getActivity(ID) must be defined in ActivitiesAdapter'));
  }
}
