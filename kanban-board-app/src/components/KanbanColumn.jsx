import React from 'react';
import SortableItem from './SortableItem';

const KanbanColumn = ({ status, tasks, deleteTask }) => (
  <div className="kanban-column">
    <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
    {tasks.map(task => (
      <SortableItem key={task.id} id={task.id} task={task} deleteTask={deleteTask} />
    ))}
  </div>
);

export default KanbanColumn;