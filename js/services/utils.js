import { todoStore } from '/js/services/db.js';

var merge = (a, b, p) => a.filter(aa => !b.find(bb => aa[p] === bb[p])).concat(b);

export function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export async function storeTodoItem(name) {
    console.log(name);
    let todoItem = {
        'id': guidGenerator(),
        'name': name,
        'status': false,
        'sync': false
    };

    const store = await todoStore();
    const todos = await store.get('todos', 'todos');
    if (todos) {
        todos.push(todoItem);
    }
    await store.put('todos', todos, 'todos');

    return todoItem;
}

export async function sendLocalData() {
    const store = await todoStore();
    let todos = await store.get('todos', 'todos');

    if (todos) {
        const nonSyncedTodos = todos.filter(todo => {
            if (todo.sync == false) {
                todo.sync = true;
                return todo;
            }
        });
        if (nonSyncedTodos.length > 0) {
            nonSyncedTodos.forEach(async function (nonSyncedTodo) {
                const rawResponse = await fetch('http://localhost:3000/todos', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nonSyncedTodo)
                });
                const content = await rawResponse.json();
                console.log("Send Local Data : ", content);
            });

            todos.forEach(function (nonSyncedTodo) {
                nonSyncedTodo.sync = true;
            });

            todos = merge(todos, nonSyncedTodos, "id")

            await store.put('todos', todos, 'todos');
        }
    }

}

export async function getApiTodos() {
    const rawResponse = await fetch('http://localhost:3000/todos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const data = await rawResponse.json();

    return data;
}

export function isOnline() {
    return localStorage.getItem('todoAppIsOnline');
}
