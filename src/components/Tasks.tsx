import styles from "./Tasks.module.css"
import clipboard from "../assets/clipboard.svg"
import { Task } from "./Task";
import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export function Tasks() {
  const { tasks } = useContext(TaskContext)

  return (
    <div>
      <div className={styles.tasksCounters}>
        <div className={styles.newTasks}>
          <p>Tarefas criadas</p>
          <span>{tasks?.length}</span>
        </div>

        <div className={styles.tasksFinished}>
          <p>Concluídas</p>
          { tasks.length > 0 ? <span>{tasks.filter(task => task.isCompleted).length} de {tasks.length}</span> : <span>0</span> }
        </div>
      </div>


      {
        tasks.length === 0 ? (
          <div className={styles.tasksList}>
            <img src={clipboard} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ): (
          <div className={styles.task}>
            {
              tasks.map(task => (
                <Task key={task.id} id={task.id} content={task.content} isCompleted={task.isCompleted}  />
              ))
            }
          </div>
        )
      }
    </div>
  );
}