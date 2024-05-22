import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import Buttons from "./Components/Buttons";
import LoadingTasks from "./Components/LoadingTasks";
import "./App.css";
import useTasks from "./Functions/useTasks";
function App() {
  useTasks();
  return (
    <div className="container">
      <Header />
      <InputSection />
      <Buttons />
      <LoadingTasks />
      <ToastContainer />
    </div>
  );
}
export default App;
