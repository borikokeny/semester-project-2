import { NAMESPACE } from "../../constants.js";

export function listListing(options = {
  sort: "created",
  sortOrder: "desc",
  limit: 10,
  offset: 0,
  _tag: NAMESPACE,
  _active: true,
  _seller: true,
  _bids: true
}, user) {
  if (user) {
    // Use profile/name/posts endpoint
  } else {
    // Use listings endpoints
  }
}