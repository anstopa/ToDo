import React, { Component } from "react";
import styled from 'styled-components';


import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Layout from "../layout/Layout";


const StyledH1 = styled.h1`
margin-top: 0;
border-radius: 15px;
width: 50%;
text-align: center;
color: #FFCDB2;
font-weight: bold;
font-family: 'Lemonada', cursive;
`;
class App extends Component {
  counter = 1;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać w wiedzimna",
        date: "2020-07-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });



  };
  changeTaskStatus = (id) => {
    let tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  };
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    }
    
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    })
  
    )
  
    return true
  }
  render() {
    return (
      <>
        <Layout>

          <StyledH1>To Do</StyledH1>
          <AddTask addTask={this.addTask} />
          <TaskList
            deleteTask={this.deleteTask}
            changeTaskStatus={this.changeTaskStatus}
            tasks={this.state.tasks}
          />


        </Layout>
      </>
    );
  }
}

export default App;
