//new todo list

import { useState } from "react";

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

const addTodos = (text: string): void => {
    const newList: ITodos[]=[...todos, {text, completed: false}];
    setTodos(newList)
  }

  export default addTodos