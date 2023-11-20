const Renderer = function () {
  const renderPosts = function (posts) {
    for (let post of posts) {
      const postTemplate = `
      <div class="post">
        <div class="post-text">
            ${post.text}
        </div>
        <div class="comments${post.id}">
        </div>
    </div>`;
      const postElement = $(postTemplate);
      $("#posts").append(postElement);
      for (comment of post.comments) {
        const commentTemplate = `
        <div >
            <p class="delete-comment">
                 X
            </p>
            <p class="comment-text">
                ${comment.text}
            </p>
        </div>
        `;
        const commentElement = $(commentTemplate);
        $(`.comments${post.id}`).append(commentElement);
      }
      const writeCommentTemplate = `
      <input type="text" placeholder="Got something to say?">
      <button >Comment</button>
      <button class="delete">Comment</button>`;
      const writeCommentElement = $(writeCommentTemplate);
      $(`.comments${post.id}`).append(writeCommentElement);
    }
  };

  return { renderPosts };
};
