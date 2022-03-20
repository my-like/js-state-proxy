import Store from "./store.js";

export default class Component {
  constructor(props = {}) {
    // declare member variable
    this.element = props.element;
    this.render  = this.render ?? ((data) => {});

    if(!this.element instanceof HTMLElement) {
      console.error("element should be HTML Element");
      return false;
    }

    // init member variable
    if(props.store instanceof Store) {
      props.store.events.subscribe("stateChange", (data) => this.render(data));
    }
  }
}