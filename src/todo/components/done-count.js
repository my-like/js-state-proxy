import Component from "../../lib/component.js";
import store from '../todo-state-store.js';

export default class DoneCount extends Component{
  constructor(props) {
    super({
      store,
      element: document.querySelector('.todo-count')
    });
    this.render(store.state);
  }

  render(state) {
    if(this.currentValue === state.count) {
      return;
    }
    this.currentValue = state.count;
    this.element.innerHTML = `You've done ${state.count} todos`;
  }
}