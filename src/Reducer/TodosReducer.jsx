import React, { createContext, useReducer } from "react";

export const initialState = {
  tasks: [],
  value: "",
  loading: true,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, tasks: action.payload };
    case "SET_VALUE":
      return { ...state, value: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "ADD_TASK":
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { ...state, tasks: newTasks, value: "" };
    case "REMOVE_TASK":
      const updatedTasks = state.tasks.filter(
        (task, index) => index !== action.payload
      );

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };
    case "TOGGLE_COMPLETE":
      const updatedTasksWithCompletion = state.tasks.map((task, index) =>
        index === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksWithCompletion));
      return { ...state, tasks: updatedTasksWithCompletion };
    case "REMOVE_TASKS":
      localStorage.removeItem("tasks");
      return { ...state, tasks: [] };
    default:
      return state;
  }
}

export const TodoContext = createContext();
const TodosReducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodosReducer;
