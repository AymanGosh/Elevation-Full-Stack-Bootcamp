//const posts = require("./posts");

const Tweeter = function () {
  let postIdCounter = 3;
  let commentIdCounter = 7;
  let _posts = [...posts];

  const getPosts = function () {
    return [..._posts];
  };

  const addPost = function (textPost) {
    const newPost = { text: textPost, id: `p${postIdCounter++}`, comments: [] };
    //postIdCounter++;
    _posts.push(newPost);
  };

  const removePost = function (postID) {
    _posts = _posts.filter((post) => post.id !== postID);
  };

  const addComment = function (text, postID) {
    //_posts.findIndex(post => post.id === postID);
    for (let p of _posts) {
      if (p.id !== postID) continue;
      const newComment = { id: `c${commentIdCounter++}`, text: text };
      p.comments.push(newComment);
    }
  };

  const removeComment = function (postID, commentID) {
    for (let post of _posts) {
      if (post.id !== postID) continue;
      post.comments = post.comments.filter((c) => c.id !== commentID);
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
