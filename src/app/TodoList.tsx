'use client';

import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useTasks } from '../hooks/useTasks';

export default function TodoList() {
    const { tasks, addTask, removeTask } = useTasks();

    return (
        <div className="p-6 max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                To-Do List <span className="text-blue-500">({tasks.length})</span>
            </h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
    );
}
