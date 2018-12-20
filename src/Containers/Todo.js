import React, { Component } from "react";
import TodoViewer from "../Components/TodoViewer";
import AddTodo from "../Containers/AddTodo";
import TodoStatusViewer from "../Components/TodoStatusViewer";

class Todo extends Component {
  state = {
    todos: [
      { id: 1, task: "eating", status: "active" },
      { id: 2, task: "bathing", status: "active" },
      { id: 3, task: "drinking", status: "active" }
    ],
    totalTask: 0,
    activeTask: 0,
    completedTask: 0,
    showDeleteModal: false
  };

  componentWillMount() {
    let active_count = 0;
    let completed_count = 0;
    [...this.state.todos].map(item => {
      if (item.status === "active") active_count++;
      else if (item.status === "completed") completed_count++;
      return null;
    });
    this.setState({
      totalTask: this.state.todos.length,
      activeTask: active_count,
      completedTask: completed_count
    });
  }

  addTodoHandler = newTodo => {
    if (newTodo.task !== null && newTodo.task !== "") {
      newTodo.id = Math.random();
      let arr = [...this.state.todos, newTodo];
      let active_count = this.state.activeTask;

      this.setState({
        todos: arr,
        totalTask: arr.length,
        activeTask: active_count + 1
      });
    }
  };

  showModal = () => {
    console.log("executed");
    console.log(this.state.showDeleteModal);
    this.setState({
      showDeleteModal: true
    });
    console.log(this.state.showDeleteModal);
  };

  hideModal = () => {
    this.setState({
      showDeleteModal: false
    });
  };

  deleteTodoHandler = id => {
    let active_count = this.state.activeTask;
    let completed_count = this.state.completedTask;

    let updatedarr = [...this.state.todos].filter(item => {
      if (item.id === id) {
        if (item.status === "active") active_count--;
        else if (item.status === "completed") completed_count--;
      }
      return id !== item.id;
    });

    this.setState({
      todos: updatedarr,
      totalTask: updatedarr.length,
      activeTask: active_count,
      completedTask: completed_count,
      showDeleteModal:false,
    });
  };

  ToggleStatusHandler = id => {
    let active_count = this.state.activeTask;
    let completed_count = this.state.completedTask;
    let item = [...this.state.todos].map(item => {
      if (item.id === id) {
        if (item.status === "active") {
          item.status = "completed";
          active_count--;
          completed_count++;
        } else {
          item.status = "active";
          completed_count--;
          active_count++;
        }
      }

      return item;
    });

    this.setState({
      todos: item,
      activeTask: active_count,
      completedTask: completed_count
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
          showDeleteModal={this.state.showDeleteModal}
          showModal={this.showModal}
          hide={this.hideModal}
          toggleStatus={this.ToggleStatusHandler}
        />
      );
    });

    return (
      <div>
        <h1 className="container center">To-do App</h1>
        <TodoStatusViewer
          total={this.state.totalTask}
          active={this.state.activeTask}
          completed={this.state.completedTask}
        />
        <div className="container">
          <AddTodo add={this.addTodoHandler} />
        </div>
        <div className="container">{td}</div>
        {/* {(this.state.showDeleteModal===true)?<Deletemodal hide={this.hideModal}/>:null} */}
      </div>
    );
  }
}

export default Todo;
