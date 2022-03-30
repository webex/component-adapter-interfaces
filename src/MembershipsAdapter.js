import {throwError} from 'rxjs';

import WebexAdapter from './WebexAdapter';

/**
 * A person that is part of a membership.
 *
 * @typedef {object} Member
 * @property {string}   ID          The member identifier
 * @property {string}   orgID       The organization identifier
 * @property {boolean}  muted       If the member's audio is currently muted
 * @property {boolean}  sharing     If the member is currently sharing their screen
 * @property {boolean}  inMeeting   If the member is currently in meeting
 * @property {boolean}  host        If the member is the host of a meeting
 * @property {boolean}  guest       If the member is guest in meeting
 */

/**
 * A relationship between a destination and people that belong to such destination.
 *
 * @typedef {object} Membership
 * @property {string}          ID               The membership identifier
 * @property {string}          destinationID    ID of the destination for which to get members
 * @property {string}          destinationType  type of the membership destination
 * @property {Array.<Member>}  members          An array of members information
 */

/**
 * Enum for types of destinations.
 *
 * @readonly
 * @enum {string}
 */
export const DestinationType = {
  ROOM: 'room',
  MEETING: 'meeting',
};

/**
 * This is a base class that defines the interface that maps membership data.
 * Developers that want to extend `MembershipsAdapter` must implement all of its methods,
 * adhering to the exact parameters and structure of the returned objects.
 *
 * @interface
 */
export default class MembershipsAdapter extends WebexAdapter {
  /**
   * Returns an observable that emits an array of members.
   * Whenever there is an update to this array, the observable
   * will emit a new updated array of members, if datasource permits.
   *
   * @param {string} destinationID  ID of the destination for which to get members
   * @param {DestinationType} destinationType  type of the membership destination
   * @returns {external:Observable.<Array.<Member>>} Observable stream that emits an array of members
   * @memberof MembershipAdapter
   */
  getMembersFromDestination(destinationID, destinationType) {
    return throwError(
      new Error('getMembersFromDestination(destinationID, destinationType) must be defined in MembershipsAdapter'),
    );
  }

  /**
   * Returns an observable that emits the membership with a member added to the room.
   *
   * @param {string} personID ID of the person to add to a room
   * @param {string} roomID ID of the room to add the person into
   * @returns {external:Observable.<Membership>} Observable stream that emits the membership with the added member
   * @memberof MembershipAdapter
   */
  addRoomMember(personID, roomID) {
    return throwError(
      new Error('addRoomMember(personID, roomID) must be defined in MembershipsAdapter'),
    );
  }

  /**
   * Returns an observable that emits the membership with the member removed from the room.
   *
   * @param {string} personID ID of the person to remove from a room
   * @param {string} roomID ID of the room the remove the person from
   * @returns {external:Observable.<Membership>} Observable stream that emits the membership with the removed member
   * @memberof MembershipAdapter
   */
  removeRoomMember(personID, roomID) {
    return throwError(
      new Error('removeRoomMember(personID, roomID) must be defined in MembershipsAdapter'),
    );
  }
}
