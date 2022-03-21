import Component from '../../lib/component.js';
import store from '../todo-state-store.js';

export default class TodoList extends Component {
  constructor(props) {
    super({
      store,
      element: document.querySelector('.todo-list')
    });
    this.render(store.state);
  }

  render(state) {
    if (state.items.length === 0) {
      this.element.innerHTML = '<p>No Entries.</p>';
      return;
    }

    this.element.innerHTML = `
      <ul>
        ${state.items.map((item, index) =>
      `<li data-id="${index}"><input type="checkbox" name="check"/>${item}<button aria-label="Complete this item" class="clear" data-action="clear">✔</button><button aria-label="Cancel this item" class="cancel" data-action="cancel">❌</button></li>`
    ).join('')}
      </ul>
    `;
  }
}