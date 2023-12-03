const apiManager = new APIManager();

const loadUser = function () {
  disableDisplayBtn();
  apiManager.fetchAll();
};

const displayUser = function () {
  console.log(apiManager.data);
};

disableDisplayBtn();
