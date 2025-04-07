import React, { useEffect, useState } from 'react'
import './Todo.css'

function Todo() {
    const [todoList, SettodoList] = useState([])
    const [todo, Settodo] = useState({
        id: "", Tname: '', Tdate: "", status: ""
    })

    function handleList(e) {
        const { name, value } = e.target;
        Settodo((prev) => ({ ...prev, [name]: value }));
    }

    function deleteTodo(id) {
        const filterTodolist = todoList.filter((el, index) =>
            el.id != id)
        console.log("Filter array", filterTodolist);
        SettodoList(filterTodolist)
        alert("Todo List deleted successfully")
    }
    function editTodo(id) {
        const todoFind = todoList.find((el) => el.id == id)
        Settodo(todoFind);
        console.log("todo", todoFind)
    }
    // function save(e) {
    //     e.preventDefault();
    //     console.log("todo", todo)
    //     SettodoList([...todoList, todo])
    //     Settodo({
    //         id: "", Tname: '', Tdate: "", status: ""
    //     })

    //     alert("Todo List added successfully")
    // }

    function save(e) {
        e.preventDefault();

        // Check if the `todo` already exists in the list (using the `id`)
        const index = todoList.findIndex((el) => el.id === todo.id);

        if (index !== -1) {
            // Update the existing `todo` in the list
            const updatedList = [...todoList];
            updatedList[index] = todo;
            SettodoList(updatedList);
            alert("Todo List updated successfully");
        } else {
            // Add a new `todo` to the list
            SettodoList([...todoList, todo]);
            alert("Todo List added successfully");
        }

        // Reset the form state
        Settodo({
            id: "", Tname: '', Tdate: "", status: ""
        });
    }


    console.log("todoList", todoList)
    useEffect(() => {

    }, [todoList])

    return (
        <div>
            <form onSubmit={save}>
                <label>Id :</label>
                <input type="text" name="id" value={todo.id} onChange={(e) => handleList(e)}></input><br></br>
                <label>Name :</label>
                <input type="text" name="Tname" value={todo.Tname} onChange={(e) => handleList(e)}></input><br></br>
                <label>Date :</label>
                <input type="date" name="Tdate" value={todo.Tdate} onChange={(e) => handleList(e)}></input><br></br>
                <label>Status</label>
                <select name="status" value={todo.status} onChange={(e) => handleList(e)}>
                    <option value=""> Select</option>
                    <option value="pending"> pending</option>
                    <option value="todo"> todo</option>
                    <option value="completed"> completed</option>
                </select><br></br>
                <button type='submit'>Add Task</button>
            </form>

            <table  >
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>TaskList</td>
                        <td>Status</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((el, index) =>
                        <tr key={index}>
                            <td>{el.Tdate}</td>
                            <td>{el.Tname}</td>
                            <td>{el.status}</td>
                            <td><button id="btn1" type='submit' onClick={() => editTodo(el.id)}>Edit Task</button>  <button id="btn2" type='submit' onClick={() => deleteTodo(el.id)}>Delete Task</button></td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default Todo
