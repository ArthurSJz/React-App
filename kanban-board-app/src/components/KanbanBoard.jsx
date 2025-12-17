import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Column from './KanbanColumn';
import tasksData from '../assets/tasks.json';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
      status: 'todo',
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filterTasksByStatus = status => tasks.filter(task => task.status === status);

  const handleDragEnd = event => {
    const { active, over } = event;
    if (!over) return;

    const activeTaskIndex = tasks.findIndex(task => task.id === active.id);
    const activeTask = tasks[activeTaskIndex];
    const newStatus = over.id; // Ensure this ID correctly represents the column's status

    // Update the status only if it moved to a different column
    if (activeTask.status !== newStatus) {
      const updatedTasks = tasks.map(task =>
        task.id === active.id ? { ...task, status: newStatus } : task
      );
      setTasks(updatedTasks);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  return (
    <div className="kanban-board">
      <div className="add-task-container">
        <input
          type="text"
          placeholder="New task title"
          value={newTaskTitle}
          onChange={e => setNewTaskTitle(e.target.value)}
        />
        <button className="add-task" onClick={addTask}>Add Task</button>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="kanban-columns">
          {["todo", "in-progress", "done"].map(status => (
            <SortableContext
              key={status}
              items={filterTasksByStatus(status).map(task => task.id)}
              strategy={verticalListSortingStrategy}
            >
              <Column
                key={status}
                status={status}
                tasks={filterTasksByStatus(status)}
                deleteTask={deleteTask}
              />
            </SortableContext>
          ))}
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;