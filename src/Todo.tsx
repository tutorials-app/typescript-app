import React, { Component } from 'react'
import { observer } from 'mobx-react';    

interface ITodo {
    id: Number,
    title: String
}
interface FormProps {
    todo: {
        todos: Array<ITodo>,
        remove: Function
    },
}

@observer
export default class Todo extends Component<FormProps,{}> {
    
    render() {
        const { todos, remove } = this.props.todo;
        return (
            <div>
                {
                    todos.map(todo => <TodoItem key={todo.id} todo={todo} onClick={remove}/>)
                }
            </div>
        )
    }
}

function TodoItem({ todo, onClick } : any) {
    return (
        <div>
            <h1>{todo.title}</h1>
            <button type="button" className="btn btn-danger" onClick={() => onClick(todo.id)}>X</button>
        </div>
    )
}
