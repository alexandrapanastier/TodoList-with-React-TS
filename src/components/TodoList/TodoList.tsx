import styles from './TodoList.module.css';
import { useState } from 'react';

interface Item {
  id: number;
  text: string;
  completed: boolean;
}


const TodoList = () => {

  const [items, setItems] = useState<Item[]>([{id: 1, text: 'Learn React', completed: false}, {id: 2, text: 'Learn TypeScript', completed: false}]);
  const [input,setInput] = useState<string>('');
  const handleToggle = (id: number) => {
    setItems( items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };

  const handleClick = () => {
    const todo : Item = {
      id: Date.now(),text: input,completed: false}
    setItems([...items,todo])
    }

  return (
    <div className={styles.container}>
        <h1>Todo List</h1>
        <ul>
          {items.map((item) => (
            <li className={styles.liste} key={item.id} onClick={() => handleToggle(item.id)} style={{textDecoration: item.completed ? "line-through" : "none"}}> {item.text} </li> ))}     
        </ul>
        <input className={styles.item} type='text' placeholder='Add Todo' onChange={(e) => setInput(e.currentTarget.value)}/>
        <button className={styles.button} onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoList