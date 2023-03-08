import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface ITodos {
  text: string;
  completed: boolean;
}

function App() {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodos[]>([]);

  const handleSubmit = (e:React.FormEvent): void => {
    e.preventDefault();
    addTodos(value);
    setValue('');
  };

//new todo list
   const addTodos = (text: string): void => {
    const newList: ITodos[]=[...todos, {text, completed: false}];
    setTodos(newList)
  }

      //completed list
    const completedTodo = (index: number): void => {
    const newList: ITodos[] = [...todos];
    newList[index].completed = !newList[index].completed;
    setTodos(newList);
    }



  //delete a list
    const deleteTodo = (index: number): void => {
    const newList: ITodos[] = [...todos];
    newList.splice(index, 1);
    setTodos(newList);


  }

  

  return(
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setValue(e.target.value)} required type="text"/>
        <button type="submit">&#10010;</button>
      </form>
      <ul>
        {todos.map((todo: ITodos, index:number)=> (
        <li
          style={{ textDecoration: todo.completed ? 'line-through' : ''}} key={index}>

            {todo.text}
            <button type='button' onClick={()=> completedTodo(index)}>
              {todo.completed ? 'undo' : 'completed'} &#10004;
              
            </button>

            <button type='button' onClick={() => deleteTodo (index)}
            > &#10006; </button>
        </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App;
