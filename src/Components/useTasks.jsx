import { useEffect, useContext } from "react";
import { TodoContext } from "../TodosReducer";

const useTasks = () => {
  const { dispatch } = useContext(TodoContext);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));

        if (storedTasks) {
          dispatch({ type: "SET_TASK", payload: storedTasks });
          dispatch({ type: "SET_LOADING", payload: false });
        } else {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          const initialTasks = data.slice(0, 10).map((task) => ({
            ...task,
            completed: false,
          }));
          dispatch({ type: "SET_TASK", payload: initialTasks });
          localStorage.setItem("tasks", JSON.stringify(initialTasks));
          dispatch({ type: "SET_LOADING", payload: false });
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchTasks();
  }, [dispatch]);

  return null;
};

export default useTasks;
