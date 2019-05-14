import { openDB } from '/node_modules/idb/build/esm/index.js';

export async function todoStore() {
    const todoStore = await openDB('app-store-todos', 1, {
        upgrade(db) {
            db.createObjectStore('todos');
        }
    });
    return Promise.resolve( todoStore );
}
