const TASKS_KEY_PREFIX = 'userTasks_';

export const taskService = {
  getTasksKey: (userId) => {
    return `${TASKS_KEY_PREFIX}${userId}`;
  },

  getTasks: (userId) => {
    try {
      const key = taskService.getTasksKey(userId);
      const tasks = localStorage.getItem(key);
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error('Get tasks error:', error);
      return [];
    }
  },

  createTask: (userId, taskData) => {
    try {
      const tasks = taskService.getTasks(userId);
      const newTask = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        title: taskData.title,
        description: taskData.description || '',
        completed: false,
        priority: taskData.priority || 'medium',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      tasks.push(newTask);
      const key = taskService.getTasksKey(userId);
      localStorage.setItem(key, JSON.stringify(tasks));
      return { success: true, task: newTask };
    } catch (error) {
      console.error('Create task error:', error);
      return { success: false, error: error.message };
    }
  },

  updateTask: (userId, taskId, updates) => {
    try {
      const tasks = taskService.getTasks(userId);
      const taskIndex = tasks.findIndex((t) => t.id === taskId);

      if (taskIndex === -1) {
        return { success: false, error: 'Task not found' };
      }

      tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...updates,
        updatedAt: new Date().toISOString(),
      };

      const key = taskService.getTasksKey(userId);
      localStorage.setItem(key, JSON.stringify(tasks));
      return { success: true, task: tasks[taskIndex] };
    } catch (error) {
      console.error('Update task error:', error);
      return { success: false, error: error.message };
    }
  },

  deleteTask: (userId, taskId) => {
    try {
      const tasks = taskService.getTasks(userId);
      const filteredTasks = tasks.filter((t) => t.id !== taskId);

      const key = taskService.getTasksKey(userId);
      localStorage.setItem(key, JSON.stringify(filteredTasks));
      return { success: true };
    } catch (error) {
      console.error('Delete task error:', error);
      return { success: false, error: error.message };
    }
  },

  toggleTaskComplete: (userId, taskId) => {
    try {
      const tasks = taskService.getTasks(userId);
      const task = tasks.find((t) => t.id === taskId);

      if (!task) {
        return { success: false, error: 'Task not found' };
      }

      return taskService.updateTask(userId, taskId, { completed: !task.completed });
    } catch (error) {
      console.error('Toggle task error:', error);
      return { success: false, error: error.message };
    }
  },

  deleteAllCompleted: (userId) => {
    try {
      const tasks = taskService.getTasks(userId);
      const activeTasks = tasks.filter((t) => !t.completed);

      const key = taskService.getTasksKey(userId);
      localStorage.setItem(key, JSON.stringify(activeTasks));
      return { success: true, deletedCount: tasks.length - activeTasks.length };
    } catch (error) {
      console.error('Delete completed tasks error:', error);
      return { success: false, error: error.message };
    }
  },
};

