export default class AuctionAPI {
    constructor(token = "") {
      this.token = token;
    }
}

// const api = new AuctionAPI(localStorage.token)

// const posts = await api.posts.list({
//   tag: "test"
// })
// const post = await api.post.create(postData)

// const publicAPI = new AuctionAPI()