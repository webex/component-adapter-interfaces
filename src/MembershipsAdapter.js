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
 * Members data and room ID to add members to room
 *
 * @typedef {object} RoomMembership
 * @property {string} roomID The ID of the room in which members are added
 * @property {Array} personID ID of the members if personEmail not used
 * @property {Array} personEmail Email of the members if personID not used
 * @property {boolean} isModerator Boolean if member added as a moderator
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
   * Add members to room for the given room ID.
   * Returns an observable that emits the Member array with the data
   * after adding members to room.
   * Observable will complete after one emission.
   *
   * @param {RoomMembership} RoomMembership Information to add members to given room ID
   * @returns {Observable<Member[]>} Observable stream that emits an array of member data
   * @memberof MembershipAdapter
   */
  addMembersToRoom(RoomMembership) {
    return throwError(new Error('addMembersToRoom must be defined in Membership adapter'));
  }
}
