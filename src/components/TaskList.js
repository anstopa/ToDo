import React from "react";
import Task from "./Task";
import styled from 'styled-components'


const StyledTaskList = styled.div`
width: 80%;
font-family: 'Lemonada', cursive;
color: #FFCDB2;

${({theme})=> theme.media.phone}{
max-width: 70%;
}
${({theme})=> theme.media.tablet}{
max-width: 50%;
}
${({theme})=> theme.media.desktop}{
max-width: 40%;
}
`;

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  done.sort((a, b) => {
    return b.finishDate - a.finishDate;
  });
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.deleteTask}
      change={props.changeTaskStatus}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.deleteTask}
      change={props.changeTaskStatus}
    />
  ));
  return (
    <>
      <StyledTaskList>
        <h2>tasks to do</h2>
        {activeTasks.length > 0 ? activeTasks : <p>no tasks</p>}
      </StyledTaskList>

      <StyledTaskList>
        <h2>
          task done <em>({doneTasks.length})</em>
        </h2>
        {done.length > 5 && <span>displaying only 5 tasks</span>}
        {doneTasks.slice(0, 5)}
      </StyledTaskList>
    </>
  );
};

export default TaskList;
