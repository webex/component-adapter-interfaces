import {throwError} from 'rxjs';

import WebexAdapter from './WebexAdapter';

/**
 * A set of people in Webex.
 *
 * @typedef {object} Organization
 * @property {string} ID    The organization identifier
 * @property {string} name  The display name of the organization
 */

/**
 * This is a base class that defines the interface that maps organization data.
 * Developers that want to extend `OrganizationsAdapter` must implement all of its methods,
 * adhering to the exact parameters and structure of the returned objects.
 *
 * @interface
 */
export default class OrganizationsAdapter extends WebexAdapter {
  /**
   * Returns an observable that emits organization data of the given ID.
   *
   * @param {string} ID ID of organization to get
   * @returns {external:Observable.<Organization>} Observable stream that emits organization data
   * @memberof OrganizationsAdapter
   */
  getOrg(ID) {
    return throwError(new Error('getOrg(ID) must be defined in OrganizationsAdapter'));
  }
}
