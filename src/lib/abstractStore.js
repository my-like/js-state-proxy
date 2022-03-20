export default class AbsractStore {
  
  get state() { // readonly
    return this._state.state;
  }
  
  dispatch(actionKey, payload) {
    if(typeof this.actions[actionKey] !== 'function') {
      console.error(`Action "${actionKey}" doesn't exist.`);
      return false;
    }

    console.groupCollapsed(`Action: ${actionKey}`);

    this.status = 'action';
    this.actions[actionKey](this, payload);
    Object.assign(this._state, this._state); // set trap triggered at here!

    console.groupEnd();

    return true;
  };

  commit(mutationKey, payload) {
    if(typeof this.mutations[mutationKey] !== 'function') {
      console.error(`Mutation "${mutationKey}" doesn't exist.`);
      return;
    }

    this.status = 'mutation';
    this.mutations[mutationKey](this.state, payload);
  };
}