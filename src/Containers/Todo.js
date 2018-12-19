import React, { Component } from "react";
import TodoViewer from "../Components/TodoViewer";
import AddTodo from "../Containers/AddTodo";

class Todo extends Component {
  state = {
    todos: [
      { id: 1, task: "eating", status: "active" },
      { id: 2, task: "bathing", status: "active" },
      { id: 3, task: "drinking", status: "active" }
    ]
  };

  addTodoHandler = newTodo => {
    console.log("main");
    if (newTodo.task !== null&& newTodo.task!=='') {
        console.log(typeof(newTodo.task))
      newTodo.id = Math.random();
      let arr = [...this.state.todos, newTodo];

      this.setState({
        todos: arr
      });
    }
  };
  deleteTodoHandler = id => {
    let updatedarr = [...this.state.todos].filter(item => {
      return id !== item.id;
    });
    this.setState({
      todos: updatedarr
    });
  };

  ToggleStatusHandler = id => {
    let item = [...this.state.todos].map(item => {
      if (item.id === id) {
        if (item.status === "active") item.status = "completed";
        else item.status = "active";
      }

      return item;
    });
    this.setState({
      todos: item
    });
  };

  render() {
    let todos = [...this.state.todos];

    let td = todos.map(item => {
      return (
        <TodoViewer
          status={item.status}
          task={item.task}
          key={item.id}
          id={item.id}
          delete={this.deleteTodoHandler}
          toggleStatus={this.ToggleStatusHandler}
        />
      );
    });
    console.log(td);

    return (
      <div>
        <h1 className="container center">To-do App</h1>
        <div className="container">
          <AddTodo add={this.addTodoHandler} />
        </div>
        <div className="container">{td}</div>
      </div>
    );
  }
}

export default Todo;
