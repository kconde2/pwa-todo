import AppTodoItem from '/js/components/TodoItem/TodoItem.js';
import checkConnectivity from '/js/services/connection.js';
import { sendLocalData } from '/js/services/utils.js';
import { todoStore } from '/js/services/db.js';

(async function (document) {

  const app = document.querySelector('#app');
  const skeleton = app.querySelector('.skeleton');
  const todoList = app.querySelector('[page=todo-list]');
  const addTodoButton = app.querySelector("#addTodoButton");
  const addTodoValue = app.querySelector("#addTodoValue");

  checkConnectivity();
  document.addEventListener('connection-changed', ({ detail }) => {
    window.todoAppIsOnline = detail;
  });

  const store = await todoStore();
  const todos = await store.get('todos', 'todos');

  if (!todos) {
    await store.put('todos', [], 'todos');
  }

  if (todos) {
    try {
      const todoItem = todos.map(todo => {
        const todoElement = new AppTodoItem();

        todoElement.initTodoItem(todo.name, todo.status);
        todoList.appendChild(todoElement);

        return todoElement;
      });

    } catch (error) {
      console.log(error.toString());
    }
  } else {
    var textnode = document.createTextNode("No todo item yet");         // Create a text node
    todoList.appendChild(textnode);
  }


  // Listening to Add Todo Event
  addTodoButton.addEventListener('click', async function () {

    if (window.todoAppIsOnline) {
      console.log('yes');
      const todos = await store.get('todos', 'todos');

      if (todos) {
        sendLocalData(todos);
      }
    } else {
      storeTodoItem(addTodoValue.value);
    }
  });

})(document);
