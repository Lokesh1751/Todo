import React,{useContext} from 'react';
import { TodoContext } from "../TodosReducer";
import Card from './Card';

const LoadingTasks = () => {
    const{state,dispatch}=useContext(TodoContext)
  const handleRemoveTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  const handleToggleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id });
  };

  return (
    <div>
      {state.loading ? (
        <p className="loading">Loading tasks...</p>
      ) : (
        <ul>
          {state.tasks.map((task,index) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              onRemove={() => handleRemoveTask(index)}
              onToggleComplete={() => handleToggleComplete(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default LoadingTasks;
