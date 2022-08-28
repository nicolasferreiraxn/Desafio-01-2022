import { createContext, useState } from "react";
import { v4 } from "uuid"

type Task = { 
  id: string,
  content: string,
  isCompleted: boolean
}

type TasksContextData = {
  tasks: Task[],
  addTask(content: string): void,
  removeTask(id: string): void,
  toggleTask(id: string): void
}

type TaskProviderProps = {
  children: React.ReactNode
}


export const TaskContext = createContext({} as TasksContextData);

export function TaskProvider({ children }: TaskProviderProps){
  const [ tasks, setTasks ] = useState<Task[]>(() => {
    const storageTasks = localStorage.getItem("tasks");
    if(storageTasks){
      return JSON.parse(storageTasks);
    } else {
      return [];
    }
  });

  function addTask (content: string){
    const newTask: Task = {
      id: v4(),
      content,
      isCompleted: false
    }

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTasks([...tasks, { id: v4(), content, isCompleted: false }]);
  }

  function toggleTask (id: string){
    localStorage.setItem("tasks", JSON.stringify(tasks.map(task => {
      if(task.id === id){
        return { ...task, isCompleted: !task.isCompleted }
      } else {
        return task;
      }
    })));
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  }

  function removeTask (id: string){
    localStorage.setItem("tasks", JSON.stringify(tasks.filter(task => task.id !== id)));
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  )
}

 