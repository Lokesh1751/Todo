import React from "react";
import Header from "./Components/Header";
import InputSection from "./Components/InputSection";
import Buttons from "./Components/Buttons";
import LoadingTasks from "./Components/LoadingTasks";
import "./App.css";
import useTasks from "./Components/useTasks";
function App() {
  useTasks();
  return (
    <div className="container">
      <Header />
      <InputSection />
      <Buttons />
      <LoadingTasks />
    </div>
  );
}
export default App;
