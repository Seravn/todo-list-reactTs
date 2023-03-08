  //delete a list

import { useState } from "react";
import addTodos from "./createList";

interface ITodos {
    text: string;
    completed: boolean;
  }

  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodos[]>([]);

  const handleSubmit = (e:React.FormEvent): void => {
    e.preventDefault();
    addTodos(value);
    setValue('');
  };
  
  const deleteTodo = (index: number): void => {
    const newList: ITodos[] = [...todos];
    newList.splice(index, 1);
    setTodos(newList);
  }





export default deleteTodo