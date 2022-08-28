import { Trash } from "phosphor-react";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function Task({ id, content, isCompleted }: TaskProps){
  const { removeTask, toggleTask } = useContext(TaskContext)

  function handleDeleteTask(){
    removeTask(id)
  }

  function handleCompleteTask(){
    toggleTask(id)
  }

  return ( 
    <div className={styles.container}>

      <label className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          id="checkbox"
          type="checkbox"
          defaultChecked={isCompleted}
          onClick={handleCompleteTask}
        />
        <span className={styles.check}></span>
        <span className={styles.taskDesc}>{content}</span>
      </label>

      <p></p>

      <button onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  )
}