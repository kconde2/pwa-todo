import AppTodoItem from '/js/components/TodoItem/TodoItem.js';
import checkConnectivity from '/js/services/connection.js';
import { sendLocalData, storeTodoItem, getApiTodos, isOnline } from '/js/services/utils.js';
import { todoStore } from '/js/services/db.js';

(async function (document) {

  const app = document.querySelector('#app');
  const skeleton = app.querySelector('.skeleton');
  const todoList = app.querySelector('[page=todo-list]');
  const addTodoButton = app.querySelector("#addTodoButton");
  const addTodoValue = app.querySelector("#addTodoValue");
  const store = await todoStore();
  let todos = undefined;

  checkConnectivity();
  todos = await store.get('todos', 'todos');
  // initial data
  // if (!todos) {
  //   await store.put('todos', [], 'todos');
  // }

  if (!todos) {
      todos = await getApiTodos();
      await store.put('todos', todos, 'todos');
  } else {
    todos = await store.get('todos', 'todos');
  }

  // Build todo list
  if (todos) {
    try {
      todos.map(todo => {
        const todoElement = new AppTodoItem();
        todoElement.initTodoItem(todo.name, todo.status);
        todoList.appendChild(todoElement);
        return todoElement;
      });

    } catch (error) {
      console.log(error.toString());
    }
  } else {
    var textnode = document.createTextNode("No todo item yet");
    todoList.appendChild(textnode);
  }

  // Listening to add Todo Event
  addTodoButton.addEventListener('click', async function () {
    const todo = await storeTodoItem(addTodoValue.value);

    addTodoValue.value = '';
    if (isOnline() == true) {
      console.log('est appelé 1');
      sendLocalData();
    }

    // Add new todo Item to dom
    const todoElement = new AppTodoItem();
    todoElement.initTodoItem(todo.name, todo.status);
    todoList.appendChild(todoElement);
  });

  // Listening connectivity
  document.addEventListener('connection-changed', async ({ detail }) => {
    localStorage.setItem('todoAppIsOnline', detail);
    console.log(detail, navigator.onLine);
    if (detail == true && navigator.onLine) {
      sendLocalData();
    }
  });
})(document);
