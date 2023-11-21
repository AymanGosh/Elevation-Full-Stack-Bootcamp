const inputElm = $("#input");

const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

const post = function () {
  tweeter.addPost(inputElm.val());
  renderer.renderPosts(tweeter.getPosts());
  inputElm.val("");
};

$("#posts").on("click", ".delete", function () {
  tweeter.removePost($(this).data().id);
  renderer.renderPosts(tweeter.getPosts());
});
$("#posts").on("click", ".btn-comment", function () {
  const postID = $(this).closest("div").attr("class").slice(9);
  const text = $(this).closest("div").find("input").val();
  tweeter.addComment(text, postID);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  const postID = $(this).closest(".post").data().id;
  const commentID = $(this).next().data().id;
  tweeter.removeComment(postID, commentID);
  renderer.renderPosts(tweeter.getPosts());
});
