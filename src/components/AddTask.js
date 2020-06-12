import React, { Component } from "react";
import styled from "styled-components";

const StyledAddTask = styled.div`
display: flex;
flex-direction: column;
width: 100%;
${({theme})=> theme.media.phone}{
max-width: 80%;
}
${({theme})=> theme.media.tablet}{
max-width: 60%;
}
${({theme})=> theme.media.desktop}{
max-width: 40%;
}
`;
const StyledInputContainer = styled.div`
display: flex;
margin: 0 auto;
width: 80%;

`;
const StyledInput = styled.input`
width: 80%;
margin: 0 auto;
outline: none;
line-height: 1.5rem;
border-radius:5px;
border: 2px solid ${({theme}) => theme.colors.secondary};
color: white;
`;
const StyledCheckedInput = styled.input`
width: 50%;
margin: auto;
border-radius:50%;
`;
const StyledButton = styled.button`
width: 30%;
margin-top: 5%;
margin-left: auto;
margin-right: auto;
border-radius: 10px;
border: 2px solid ${({ theme }) => theme.colors.secondary};
color:${({ theme }) => theme.colors.secondary};
background-color: transparent;
font-weight: bold;
outline: none;
`;
const StyledLabel = styled.label`
margin: 0 auto;
color: #FFCDB2;
font-family: 'Lemonada', cursive;
`;
const StyledDateInput = styled(StyledInput)`
width:45%;
`;

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };
  handleText = (e) => {
    
    this.setState({
      text: e.target.value,
    });
  ;
}
  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };
  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if(text.length > 2){
    const add = this.props.addTask(text, date, checked)
    if (add) {
      this.setState({
        text: '',
        checked: false,
        date: new Date().toISOString().slice(0, 10),
      })
    }
  } else {alert("min length 3")}
}
  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <StyledAddTask>
        <StyledLabel htmlFor="addTask">Add Task</StyledLabel>
        <StyledInput
          type="text"
          value={this.state.text}
          onChange={this.handleText}
          id="addTask"
          maxLength="30"
        />
        
        <StyledInputContainer>

          <StyledLabel htmlFor="important">Important</StyledLabel>
          <StyledCheckedInput
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleCheckbox}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel htmlFor="date"> Deadline</StyledLabel>
          <StyledDateInput
            type="date"
            value={this.state.date}
            min={minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
        </StyledInputContainer>
        <StyledButton onClick={this.handleClick}>Add</StyledButton>
      </StyledAddTask>
    );
  }
}

export default AddTask;
