import { useEffect, useState } from "react";
import { loadTasks, saveTasks } from "../utils/storage";
import { Task } from "../types/task"; // Import the interface

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTasks(loadTasks());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      saveTasks(tasks);
    }
  }, [tasks, loaded]);

  const addTask = (task: Task) => setTasks([...tasks, task]);

  const removeTask = (id: number) => setTasks(tasks.filter((task) => task.id !== id));

  return { tasks, addTask, removeTask };
}
