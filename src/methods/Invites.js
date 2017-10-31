const Endpoints = require('../Endpoints');

/**
 * Methods for interacting with invites
 */
class InviteMethods {
    /**
     * Create a new Invite Method Handler
     * @param {RequestHandler} requestHandler - request handler that calls the rest api
     */
    constructor(requestHandler) {
        this.requestHandler = requestHandler;
    }

    /**
     * Get the invite data on an invite id
     * @param {String} inviteId - Id of the invite
     * @returns {Promise.<Invite>} [Invite Object](https://discordapp.com/developers/docs/resources/invite#invite-object)
     */
    async getInvite(inviteId) {
        return this.requestHandler.request(Endpoints.INVITE(inviteId), 'get', 'json');
    }

    /**
     * Delete an invite
     * @param {String} inviteId
     * @returns {Promise.<Invite>} [Invite Object](https://discordapp.com/developers/docs/resources/invite#invite-object)
     */
    async deleteInvite(inviteId) {
        return this.requestHandler.request(Endpoints.INVITE(inviteId), 'delete', 'json');
    }
}

/**
 * @typedef {Object} Invite
 * @property {String} code - unique id code of the invite
 * @property {Guild} guild - partial guild object of the invite
 * @property {Channel} channel - partial channel object of the invite
 * @property {User} [inviter] - creator of the invite
 * @property {Number} [uses] - how often the invite was used
 * @property {Number} [max_uses] - how often the invite can be used
 * @property {Number} [max_age] - duration in seconds until the invite expires
 * @property {Boolean} [temporary] - if this invite only grants temporary membership
 * @property {Date} [created_at] - when the invite was created
 * @property {Boolean} [revoked] - if this invite has been revoked
 */


module.exports = InviteMethods;