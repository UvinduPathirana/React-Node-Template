import React from "react";
import { Fragment, useEffect, useState } from "react";
import EditTodo from "./editTodo";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    // delete function

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todoid !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const data = await response.json();

            setTodos(data);
        }
        catch (err) {
            console.error(err.message);
        }   
    }

    useEffect(() => {
        getTodos();
    }, []);
    console.log(todos);

    return (
    <Fragment>
        <h1 className="text-center mt-5">List Todos</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.todoid}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo}></EditTodo></td>
                        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todoid)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
        </table>
    </Fragment>
    );
}

export default ListTodos;