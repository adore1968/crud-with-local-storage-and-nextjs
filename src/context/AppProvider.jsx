"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import AppContext from "./AppContext";
import { v4 } from "uuid";

function AppProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const createTask = (task) => {
    const newTasks = [...tasks, { ...task, id: v4() }];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const getTask = (id) => {
    const taskFound = tasks.find((task) => task.id === id);
    return taskFound;
  };

  const updateTask = (id, newTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) return { ...newTask, id };
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <AppContext.Provider
      value={{ tasks, createTask, deleteTask, getTask, updateTask }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
