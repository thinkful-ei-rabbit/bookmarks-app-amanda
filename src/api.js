import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/amanda';

const listApiFetch = function (...args) {
//set up error variable in scope, outside of promise chain.
  let error;
  return fetch(...args)
    .then(response => {
      if (!response.ok) {
        // if the response is not a 200 code (ok code) build error object.
        error = { code: response.status };
        //console.log(`${error.code} object created`);
        if (!response.headers.get('content-type').includes('json')) {
          error.message = response.statusText;
          return Promise.reject(error);
        }
      }
      return response.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};

const getBookmarks = function () {
  return listApiFetch(`${BASE_URL}/bookmarks`);
};

const createBookmark = function (bookmark) {
  const newBookmark = JSON.stringify(bookmark);

  return listApiFetch(`${BASE_URL}/bookmarks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newBookmark
  });
};

const deleteBookmark = function (id) {
  return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
    method: 'DELETE'
  });
};


export default {
  getBookmarks,
  createBookmark,
  deleteBookmark,
};