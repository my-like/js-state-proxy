export default {
  addItem(state, payload) {
    state.items.push(payload);
  },
  addCount(state, payload) {
    state.count += payload;
  },
  deleteItem(state, payload) {
    payload.forEach(elem => {
      delete state.items[elem];
    })
    state.items = state.items.filter(() => true);
  },
  deleteAll(state) {
    state.items = [];
  },
}