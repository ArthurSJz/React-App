const KanbanBoard = () => {
  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <h3>To Do</h3>
        <div className="kanban-card">Task 1</div>
        <div className="kanban-card">Task 2</div>
      </div>
      <div className="kanban-column">
        <h3>In Progress</h3>
        <div className="kanban-card">Task 3</div>
      </div>
      <div className="kanban-column">
        <h3>Done</h3>
        <div className="kanban-card">Task 4</div>
      </div>
    </div>
  );
};

export default KanbanBoard;