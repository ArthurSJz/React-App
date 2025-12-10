import { useState } from 'react';
import ListItem from './ListItem';
import tasksData from '../assets/tasks.json';
import '../App.css'

const List = () => {
  const [tasks, setTasks] = useState(tasksData);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <ul>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default List;