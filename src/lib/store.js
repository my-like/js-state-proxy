import AbsractStore from "./abstractStore.js";
import PubSub from "./pubsub.js";

export default class Store extends AbsractStore {
  constructor(props = {}) {
    // declare member variable
    super();
    this.events = new PubSub();
    this._state = { state: props.state ?? {} };
    this.actions = props.actions ?? {};
    this.mutations = props.mutations ?? {};
    this.status = 'resting';

    // set proxy to state
    this._state = new Proxy(this._state, {
      set: (target, key, value) => {
        target[key] = value;
        this.events.publish('stateChange', value);

        if (this.status !== 'mutation') {
          console.warn(`${key} status is not mutation!`);
        }

        this.status = 'resting';

        return true;
      }
    });
  }
}