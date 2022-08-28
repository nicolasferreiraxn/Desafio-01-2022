import styles from './New.module.css';
import { PlusCircle } from "phosphor-react"
import { useContext, FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { TaskContext } from '../contexts/TaskContext';


export function New(){
  const { addTask } = useContext(TaskContext);

  const [ content, setContent ] = useState('');

  function handleAddNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTask(content);
    setContent('');
  }

  function handleNewCommentTextChange(event : ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setContent(event.target.value);

  }

  function handleNewCommentInvalid(event : InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }


  return (
    <div className={styles.new}>
      <form onSubmit={handleAddNewTask}>
        <input 
          name="task" 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={content}
          onChange={handleNewCommentTextChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <button type="submit">Criar <PlusCircle size={20}/></button>
      </form>
    </div>
  )
}