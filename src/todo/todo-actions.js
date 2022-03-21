export default {
  addItem(store, payload) {
    store.commit('addItem', payload);
  },
  addCount(store, payload) {
    store.commit('addCount', payload)
  },
  deleteItem(store, payload) {
    store.commit('deleteItem', payload);
  },
  clearItem(store, payload) {
    this.addCount(store, payload.length);
    this.deleteItem(store, payload);
  },
  clearAll(store) {
    this.addCount(store, store.state.items.length);
    store.commit('deleteAll');
  },
}