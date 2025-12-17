const Card = ({ task, deleteTask }) => {
  return (
    <div className="kanban-card">
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Card;