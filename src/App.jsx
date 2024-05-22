import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import { TodoContext } from "./TodosReducer";
import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import Buttons from "./Components/Buttons";
import LoadingTasks from "./Components/LoadingTasks";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


function App() {
  const{state,dispatch}=useContext(TodoContext)
  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      const storedCompletedTasks = JSON.parse(
        localStorage.getItem("completedTasks")
      );

      if (storedTasks || storedCompletedTasks) {
        dispatch({ type: "SET_TASK", payload: storedTasks });
        dispatch({ type: "SET_LOADING", payload: false });
      } else {
        fetchTasks();
      }
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
      fetchTasks();
    }
  }, []);

  const fetchTasks = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          const initialTasks = data.slice(0, 10).map((task) => ({
            ...task,
            completed: false,
          }));
          dispatch({ type: "SET_TASK", payload: initialTasks });
          localStorage.setItem("tasks", JSON.stringify(initialTasks)); // Update local storage here
          dispatch({ type: "SET_LOADING", payload: false });
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        dispatch({ type: "SET_LOADING", payload: false });
      });
  };

  return (
    <div className="container">
      <Header />
      <InputSection  />
      <Buttons />
      <LoadingTasks  />
      <ToastContainer />
    </div>
  );
}

export default App;
