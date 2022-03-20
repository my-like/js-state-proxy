export default {
  addItem(state, payload) {
    state.items.push(payload);
  },
  addCount(state, payload) {
    state.count += payload;
  },
  deleteItem(state, payload) {
    state.items = state.items.filter( (elem, index) => index !== payload[index] );
  },
  deleteAll(state, payload) {
    state.items = [];
  },
}