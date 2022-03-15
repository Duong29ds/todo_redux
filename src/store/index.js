import { createStore } from "redux";

const initialState = {
  taskList: [
    {
      id: "t1",
      description: "Coding",
      completed: false,
    },
    {
      id: "t2",
      description: "Reading",
      completed: false,
    },
    {
      id: "t3",
      description: "Play game",
      completed: false,
    },
    {
      id: "t4",
      description: "Eat",
      completed: false,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  if (action.type === "changeCheck") {
    return {
      taskList: state.taskList.map((task) => {
        if (task.id === action.id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    };
  }
  if (action.type === "addTask") {
    return {
      taskList: [...state.taskList, action.task],
    };
  }
  if (action.type === "deleteTask") {
    return {
      taskList: state.taskList.filter((task) => task.id !== action.id),
    };
  }
  if (action.type === "editTask") {
    return {
      taskList: state.taskList.map((task) => {
        if (task.id === action.id) {
          task.description = action.description;
        }
        return task;
      }),
    };
  }
  return state;
};

const store = createStore(taskReducer);

export default store;
