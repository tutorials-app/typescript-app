import { observable, action } from 'mobx'

const store = observable({
    todo: {
        todos: [
            {
                id: 1,
                title: "Learning typescript",
            },
            {
                id: 2,
                title: "Learning MobX",
            },
            {
                id: 3,
                title: "Create todo app",
            },
        ],
        remove: action(function (id: Number) {
            const idx = store.todo.todos.findIndex(i => i.id === id)
            if(idx > -1) {
                store.todo.todos.splice(idx, 1);
            }
        })
    }
})

export default store


