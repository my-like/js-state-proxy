import TodoList from './todo/components/todo-list.js'
import TodoCount from './todo/components/done-count.js';
import InitEvent from './todo/components/init-event.js';



const formElem = document.querySelector('.todo-form');
const inputElem = formElem.querySelector('input');

new TodoList();
new TodoCount();
new InitEvent();

formElem.addEventListener('submit', evt => {
  evt.preventDefault();
  const value = inputElem.value.trim();
  if (value.length === 0) {
    return;
  }
  if (todoStateStore.dispatch('addItem', value)) {
    inputElem.value = "";
    inputElem.focus();
  }
});
