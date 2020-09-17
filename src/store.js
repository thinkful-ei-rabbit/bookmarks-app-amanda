let bookmarks = [];
let error;
let adding = false;
let filter = null;


const findById = function(id) {
  return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
};

const addBookmark = function(bookmark) {
  const newBookmark = Object.assign(bookmark, { expanded: false }, bookmark.rating );
  this.bookmarks.push(newBookmark);
};

const findAndDelete = function(id) {
  this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !== id);
};

const findAndExpand = function(id) {
  let bookmark = this.findById(id);
  bookmark.expanded = true;
};

const findAndUpdate = function(id, newData) {
  const currentBookmark = this.findById(id);
  Object.assign(currentBookmark, newData);
};

const setError = function(error) {
  this.error = error;
};

function filterByRating(rating) {
  this.filter = Number(rating);
}

export default {
  bookmarks,
  error,
  adding,
  filter,
  findById,
  addBookmark,
  findAndDelete,
  findAndExpand,
  findAndUpdate,
  setError,
  filterByRating
};