import React, { useContext } from "react";
import { TodoContext } from "../Reducer/TodosReducer";
import { toast } from "react-toastify";

const InputSection = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleAddTask = () => {
    if (state.value === "") {
      alert("Please Enter Something!!");
    } else {
      const tsk = {
        title: state.value,
        completed: false,
      };

      
      dispatch({ type: "ADD_TASK", payload: tsk });
      dispatch({ type: "SET_VALUE", payload: "" });
      toast.success("Task added successfully", { autoClose: 1000 });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
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
        onChange={(e) =>
          dispatch({ type: "SET_VALUE", payload: e.target.value })
        }
        onKeyDown={handleKeyPress}
      />
      <button className="btn" onClick={handleAddTask}>
        +
      </button>
    </div>
  );
};

export default InputSection;
