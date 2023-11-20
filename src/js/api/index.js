import * as postsMethods from "./posts/index.js";
import * as postMethods from "./post/index.js";

export default class AuctionAPI {
    constructor(token = "") {
      this.token = token;
    }

    posts = postsMethods
    post = postMethods
}

// const api = new AuctionAPI(localStorage.token)

// const posts = await api.posts.list({
//   tag: "test"
// })
// const post = await api.post.create(postData)

// const publicAPI = new AuctionAPI()