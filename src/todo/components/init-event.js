import store from './todo/todo-state-store.js';

function getPayload() {
  return Array.from(document.querySelectorAll('.todo-list input:checked'))
    .map(elem => parseInt(elem.dataset.id));
};

function clearAll() {
  store.dispatch('clearAll');
}

function clearItem() {
  store.dispatch('clearItem', getPayload());
}

function deleteItem() {
  store.dispatch('deleteItem', getPayload());
}

export default {
  clearAll,
  clearItem,
  deleteItem
}