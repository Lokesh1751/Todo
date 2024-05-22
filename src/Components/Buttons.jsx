import React, { useContext } from "react";
import { TodoContext } from "../Reducer/TodosReducer";

const Buttons = () => {
  const { state, dispatch } = useContext(TodoContext);
  const handleClearAll = () => {
    dispatch({ type: "REMOVE_TASKS" });
    localStorage.removeItem("tasks");
  };

  return (
    <div className="buttons">
      <button className="condition">All {state.tasks.length}</button>
      <button className="condition">
        Pending {state.tasks.filter((task) => !task.completed).length}
      </button>
      <button className="condition">
        Completed {state.tasks.filter((task) => task.completed).length}
      </button>
      <button className="condition" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Buttons;
