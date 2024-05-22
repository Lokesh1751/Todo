import React,{useContext} from 'react';
import { TodoContext } from "../TodosReducer";

const InputSection = () => {
    const{state,dispatch}=useContext(TodoContext)
  const handleAddTask = () => {
    if (state.value === '') {
      alert('Please Enter Something!!');
    } else {
      const tsk = {
        id: state.tasks.length + 1,
        title: state.value,
        completed: false,
      };
      const newTasks = [...state.tasks, tsk];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      dispatch({ type: 'ADD_TASK', payload: newTasks });
      dispatch({ type: 'SET_VALUE', payload: '' });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTask();
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        className="input"
        placeholder="Add your task 🖊️"
        value={state.value}
        onChange={(e) => dispatch({ type: 'SET_VALUE', payload: e.target.value })}
        onKeyDown={handleKeyPress}
      />
      <button className="btn" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
};

export default InputSection;
