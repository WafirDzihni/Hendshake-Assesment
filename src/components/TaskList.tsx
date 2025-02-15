import { Task } from "../types/task";
import { Trash2 } from 'lucide-react';

interface TaskListProps {
    tasks: Task[];
    removeTask: (id: number) => void;
}

export default function TaskList({ tasks, removeTask }: TaskListProps) {
    return (
        <ul className="space-y-4">
            {tasks.map((task) => (
                <li key={task.id} className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-4 border bg-white rounded-lg shadow-md">
                    <div className="w-full sm:w-auto">
                        <p className="text-lg font-semibold break-words text-gray-700">{task.activity} <span className="text-blue-500">(RM{task.price})</span></p>
                        <p className="text-gray-600">{task.type}</p>
                        <p className="text-sm text-gray-700">Booking: {task.bookingRequired ? 'Yes' : 'No'} | Accessibility: {task.accessibility}</p>
                    </div>
                    <button
                        onClick={() => removeTask(task.id)}
                        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center">
                        <Trash2 size={20} />
                    </button>
                </li>
            ))}
        </ul>
    );
}
