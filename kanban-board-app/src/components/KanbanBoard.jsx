import { useState } from 'react';
import tasksData from '../assets/tasks.json'

const KanbanBoard = () => {

  const [tasks, setTasks] = useState(tasksData);

  const filterTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="kanban-board">
      {["todo", "in-progress", "done"].map(status => (
        <div className="kanban-column" key={status}>
          <h3>
            {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
          </h3>
          {filterTasksByStatus(status).map(task => (
            <div className="kanban-card" key={task.id}>
              {task.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;