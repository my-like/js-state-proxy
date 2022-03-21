import store from '../todo-state-store.js';

function getPayload(element) {
  return Array.from(element.querySelectorAll('input:checked'))
    .map(elem => parseInt(elem.closest('li').dataset.id));
};

export default class InitEvent {
  constructor() {
    this.listElem = document.querySelector('.todo-list');
    this.btnElem  = document.querySelector('.todo-button');
    this.init();
  }

  clearAll() {
    store.dispatch('clearAll');
  }

  clear(payload) {
    store.dispatch('clearItem', payload ?? getPayload(this.listElem));
  }

  cancel(payload) {
    store.dispatch('deleteItem', payload ?? getPayload(this.listElem));
  }

  listOnClick(event) {
    let action = event.target.dataset.action;
    if (!action) return;
    let id     = parseInt(event.target.closest('li').dataset.id);
    this[action]([id]);
  }
  
  btnOnClick(event) {
    let action = event.target.dataset.action;
    if (!action) return;
    this[action]();
  }

  init() {
    this.listElem.onclick = this.listOnClick.bind(this);
    this.btnElem.onclick = this.btnOnClick.bind(this);
  }
}