const postsElm = $("#posts");

const Renderer = function () {
  const createPostElement = function (postID, text) {
    const postTemplate = `<div data-id=${postID} class="post">
          <div class="post-text">
              ${text}
          </div>
          <div  class="comments-${postID}">
          </div>
      </div>`;
    const postElement = $(postTemplate);
    postsElm.append(postElement);
  };

  const createCommentElement = function (text, postID, commentID) {
    const commentTemplate = `<div >
          <p class="delete-comment">
               X
          </p>
          <p data-id=${commentID} class="comment-text">
              ${text}
          </p>
    </div>`;
    const commentElement = $(commentTemplate);
    $(`.comments-${postID}`).append(commentElement);
  };
  const createNewCommentElement = function (postID) {
    const newCommentTemplate = `<input class="new-comment" type="text" placeholder="Got something to say?">
      <button class="btn-comment" >Comment</button>
      <button data-id=${postID} class="delete">Delete</button>`;
    const newCommentElement = $(newCommentTemplate);
    $(`.comments-${postID}`).append(newCommentElement);
  };

  const renderPosts = function (posts) {
    postsElm.empty();
    for (let post of posts) {
      createPostElement(post.id, post.text);
      for (comment of post.comments) {
        createCommentElement(comment.text, post.id, comment.id);
      }
      createNewCommentElement(post.id);
    }
  };

  return { renderPosts };
};
