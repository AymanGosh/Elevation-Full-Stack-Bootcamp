const apiManager = new APIManager();
const renderer = new Renderer();
const loadUser = function () {
  disableDisplayBtn();
  apiManager.fetchAll();
};

const displayUser = function () {
  renderer.empty();
  renderer.render(apiManager.data);
};

disableDisplayBtn();
