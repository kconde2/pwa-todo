export function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export async function storeTodoItem(name) {
    let todoItem = {
        'id': guidGenerator(),
        'name': name,
        'status': false
    };

    const todos = await todoStore.get('todos', 'todos');
    todos.push(todoItem);

    await todoStore.put('todos', todos, 'todos');
}

export function sendLocalData(todos) {
    todos.forEach(async function (todoItem) {
        const rawResponse = await fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoItem)
        });
        const content = await rawResponse.json();
        console.log(content);
    });
}
