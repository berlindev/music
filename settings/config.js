
require("dotenv").config();

module.exports = {

  /**
   * @description requires settings for the bot
   */

  TOKEN: process.env.TOKEN || "MTA1OTUxNzc2NjA5MDEwNDkzMw.GiBqYR.e-pEnAKTf6LuAInYwZgdXhomqGedMeVcom5iqY",  // your bot token
  PREFIX: process.env.PREFIX || "m", //<= default is #  // bot prefix
  OWNER_ID: process.env.OWNER_ID || "672027578181353473", //your client id

  /**
   *
   */
  EMPTY_LEAVE: process.env.EMPTY_LEAVE || 60, //<= default is 60  // time in seconds

  /**
   * @description boolean settings for the bot
   */
  LEAVE_EMPTY: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when empty
  LEAVE_FINISH: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when finished
  LEAVE_STOP: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when stopped
}