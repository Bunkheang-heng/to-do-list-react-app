import { useState, useEffect, useCallback } from 'react';
import { taskService } from '../utils/task';

export const useTasks = (userId) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = useCallback((id) => {
    if (!id) {
      setLoading(false);
      return;
    }
    const userTasks = taskService.getTasks(id);
    setTasks(userTasks);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (userId) {
      loadTasks(userId);
    } else {
      setLoading(false);
    }
  }, [userId, loadTasks]);

  const refreshTasks = useCallback(() => {
    if (userId) {
      loadTasks(userId);
    }
  }, [userId, loadTasks]);

  const activeTasksCount = tasks.filter((t) => !t.completed).length;
  const completedTasksCount = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;

  return {
    tasks,
    loading,
    activeTasksCount,
    completedTasksCount,
    totalTasks,
    refreshTasks,
    setTasks,
  };
};

