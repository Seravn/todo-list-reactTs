//completed list

import { useState } from "react";


interface ITodos {
    text: string;
    completed: boolean;
  }



     const [value, setValue] = useState<string>('');
     const [todos, setTodos] = useState<ITodos[]>([]);
   
   

     const completedTodo = (index: number): void => {
        const newList: ITodos[] = [...todos];
        newList[index].completed = !newList[index].completed;
        setTodos(newList);
        }
    

export default completedTodo