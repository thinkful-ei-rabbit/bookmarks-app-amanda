let bookmarks = [];
let error;
let adding = false;


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

const setFilter = function(filter) {
  this.filter = filter;
};

function filterByRating(rating) {
  this.filterBy = Number(rating);
  if (rating) {
    return this.list.filter(bookmark => bookmark.rating && bookmark.rating >= this.filterBy);
  }
  return this.list;
}

export default {
  bookmarks,
  error,
  adding,
  filterBy: '',
  findById,
  addBookmark,
  findAndDelete,
  findAndExpand,
  findAndUpdate,
  setError,
  setFilter,
  filterByRating
};