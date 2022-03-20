import TodoList from './todo/components/todo-list.js'
import TodoCount from './todo/components/done-count.js';


const listElem = document.querySelector('.todo-list');
const formElem = document.querySelector('.todo-form');
const inputElem = formElem.querySelector('input');

let todoList = new TodoList();
let todoCount = new TodoCount();

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


listElem.addEventListener( (evt) => {
  let button = evt.target.closest('button');
  if(!button) return;

});