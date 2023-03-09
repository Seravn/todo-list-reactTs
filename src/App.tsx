import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import addTodos from './components/createList';
import completedTodo from './components/completedist';
import deleteTodo from './components/deletedList';

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

      <h1>My Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder='write it down!' onChange={(e) => setValue(e.target.value)} required type="text"/>
        <button type="submit">&#10010;</button>
      </form>

      <ul>
        {todos.map((todo: ITodos, index:number)=> (
        <li style={{ textDecoration: todo.completed ? 'line-through rgb(116, 156, 108)' : '', } } key={index}>

            {todo.text}
            
            <button className='btn1' type='button' onClick={()=> completedTodo(index)}>
              {todo.completed ? 'undo' : 'completed'} &#10004;
              
            </button>

            <button className='btn2' type='button' onClick={() => deleteTodo (index)}
            > &#10006; </button>
        </li>
        ))}
      </ul>

    </div>
    </>
  )
}

export default App;
