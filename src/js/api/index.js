import * as authMethods from "./auth/index.js";
import * as listingMethods from "./listing/index.js";
import * as profileMethods from "./profile/index.js;"

export default class AuctionAPI {
    constructor(token = "") {
      this.token = token;
    }

    auth = authMethods
    listing = listingMethods
    profile = profileMethods
}