import { React, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import TaskList from "./User/components/ToDoList/TaskList";
import Task from "./User/components/ToDoList/Task";
import FormTaskNew from "./User/components/ToDoList/FormTaskNew";
import RadioButton from "./User/components/ui/RadioButton";

function App() {
  const [statusTask, setStatusTask] = useState("All");
  const getStatusHandler = (status) => {
    setStatusTask(status);
  };
  const taskArray = useSelector((state) => state.taskList);
  let DUMMY_DATA = [];
  if (statusTask === "Completed") {
    DUMMY_DATA = taskArray.filter((task) => task.completed === true);
  } else if (statusTask === "Not-Complete") {
    DUMMY_DATA = taskArray.filter((task) => task.completed === false);
  } else {
    DUMMY_DATA = taskArray;
  }
  let content =
    DUMMY_DATA.length === 0 ? (
      <div className="info">
        <p>No task to show</p>
      </div>
    ) : (
      <TaskList>
        {DUMMY_DATA.map((task) => (
          <Task
            id={task.id}
            key={task.id}
            description={task.description}
            completed={task.completed}
          />
        ))}
      </TaskList>
    );
  console.log(content);
  return (
    <div className="App">
      <div>
        <h1 className="header">TODO APP</h1>
        <FormTaskNew />
        {content}
        <div className="radios">
          <RadioButton getStatus={getStatusHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
