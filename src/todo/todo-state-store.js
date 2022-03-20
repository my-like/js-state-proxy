import Store from '../lib/store.js';
import state from './init-state.js';
import actions from './todo-actions.js';
import mutations from './todo-mutations.js';

export default new Store({
  state,
  actions,
  mutations
});