import React from "react";
import styled from 'styled-components';

const StyledTask = styled.div`
display: flex;
flex-direction: column;
font-family: 'Montserrat';
font-size: 1rem;
`;
const StyledButton = styled.button`
width: 30%;
margin: 0 auto;
border-radius: 10px;
border: 2px solid ${({ theme }) => theme.colors.secondary};
color:${({ theme }) => theme.colors.secondary};
background-color: transparent;
font-weight: bold;
outline: none;
`;
const StyledP = styled(StyledTask)`
display: flex;
/* strong {
width: 100%
} */
`;
const Task = (props) => {
  const style = {
    color: "red",
  };
  const { text, date, id, active, important, finishDate } = props.task;
  if (active) {
    return (
      <StyledTask>
        <StyledP>
          <strong style={important ? style : null}>{text}</strong> 
          <span>- do{" "}{date}</span>
          <div>
          <StyledButton onClick={() => props.change(id)}>Done</StyledButton>
          <StyledButton onClick={() => props.delete(id)}>Del</StyledButton>
          </div>
        </StyledP>
      </StyledTask>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <StyledTask>
        <StyledP>
          <strong>{text}</strong>
          <em>(zrobić do {date})</em>
          - potwierdzenie wykonania<span> {finish}</span>
          <StyledButton onClick={() => props.delete(id)}>X</StyledButton>
        </StyledP>{" "}
      </StyledTask>
    );
  }
};

export default Task;
