import React from 'react';

const ListItem = ({ task, onDelete }) => {
  return (
    <li className="list-item">
      <span>
        {task.title} {task.isCompleted ? '✔️' : '❌'}
      </span>
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;