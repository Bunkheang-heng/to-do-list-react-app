import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { 
  FaPlus, 
  FaSearch, 
  FaEdit, 
  FaTrash, 
  FaCheckCircle, 
  FaCircle,
  FaFilter,
  FaTasks,
  FaCheck,
  FaCalendarAlt,
} from 'react-icons/fa';
import { useAuth } from '../hook/useAuth';
import { useTasks } from '../hook/useTasks';
import { taskService } from '../utils/task';
import {getPriorityBadgeColor, getPriorityIcon } from '../utils/taskUtils';
import TaskModal from '../components/TaskModal';
import Button from '../components/Button';

export default function Task() {
  const location = useLocation();
  const { user } = useAuth();
  const { tasks, activeTasksCount, completedTasksCount, refreshTasks } = useTasks(user?.id);
  const [filter, setFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
  });

  useEffect(() => {
    if (location.state) {
      if (location.state.searchQuery) {
        setSearchQuery(location.state.searchQuery);
      }
      if (location.state.filter) {
        setFilter(location.state.filter);
      }
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      toast.error('Task title is required');
      return;
    }

    if (!user) {
      toast.error('User not found');
      return;
    }

    if (editingTask) {
      const result = taskService.updateTask(user.id, editingTask.id, {
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        dueDate: formData.dueDate || null,
      });

      if (result.success) {
        toast.success('Task updated successfully');
        refreshTasks();
        resetForm();
      } else {
        toast.error(result.error || 'Failed to update task');
      }
    } else {
      const result = taskService.createTask(user.id, formData);

      if (result.success) {
        toast.success('Task created successfully');
        refreshTasks();
        resetForm();
      } else {
        toast.error(result.error || 'Failed to create task');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      priority: 'medium',
      dueDate: '',
    });
    setEditingTask(null);
    setShowForm(false);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      description: task.description || '',
      priority: task.priority || 'medium',
      dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
    });
    setShowForm(true);
  };

  const handleDelete = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const result = taskService.deleteTask(user.id, taskId);
      if (result.success) {
        toast.success('Task deleted successfully');
        refreshTasks();
      } else {
        toast.error(result.error || 'Failed to delete task');
      }
    }
  };

  const handleToggleComplete = (taskId) => {
    const result = taskService.toggleTaskComplete(user.id, taskId);
    if (result.success) {
      refreshTasks();
    } else {
      toast.error(result.error || 'Failed to update task');
    }
  };

  const handleDeleteCompleted = () => {
    if (window.confirm('Are you sure you want to delete all completed tasks?')) {
      const result = taskService.deleteAllCompleted(user.id);
      if (result.success) {
        toast.success(`Deleted ${result.deletedCount} completed task(s)`);
        refreshTasks();
      } else {
        toast.error(result.error || 'Failed to delete completed tasks');
      }
    }
  };

  const getFilteredTasks = () => {
    let filtered = tasks;

    // Filter by status (all, active, completed)
    if (filter === 'active') {
      filtered = filtered.filter((task) => !task.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter((task) => task.completed);
    }

    // Filter by selected date
    if (selectedDate) {
      filtered = filtered.filter((task) => {
        if (!task.dueDate) {
          return false;
        }
        const dueDate = new Date(task.dueDate);
        dueDate.setHours(0, 0, 0, 0);
        const selected = new Date(selectedDate);
        selected.setHours(0, 0, 0, 0);
        return dueDate.getTime() === selected.getTime();
      });
    }

    // Filter by priority
    if (priorityFilter !== 'all') {
      filtered = filtered.filter((task) => task.priority === priorityFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          (task.description && task.description.toLowerCase().includes(query))
      );
    }

    return filtered;
  };


  const filteredTasks = getFilteredTasks();

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-6xl mx-auto min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <FaTasks className="text-orange-600 dark:text-orange-400 text-xl" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-white dark:text-white tracking-tight">
              Task Manager
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
              Organize your work and boost productivity
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">Total Tasks</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white">{tasks.length}</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <FaTasks className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">Active Tasks</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white">{activeTasksCount}</p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <FaCircle className="text-green-600 dark:text-green-400 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">Completed</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white">{completedTasksCount}</p>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <FaCheckCircle className="text-orange-600 dark:text-orange-400 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 mb-6 border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col lg:flex-row gap-4 mb-5">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search tasks by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 dark:focus:border-orange-400 transition-all text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm ${
                  filter === 'all'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <FaFilter className="text-xs" />
                All ({tasks.length})
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm ${
                  filter === 'active'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <FaCircle className="text-xs" />
                Active ({activeTasksCount})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm ${
                  filter === 'completed'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <FaCheckCircle className="text-xs" />
                Completed ({completedTasksCount})
              </button>
            </div>

            <div className="ml-3 flex items-center gap-2">
              <label className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Priority:</label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
              >
                <option value="all">All</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              {priorityFilter !== 'all' && (
                <button
                  onClick={() => setPriorityFilter('all')}
                  className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Date Filter Section */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <FaCalendarAlt className="text-gray-500 dark:text-gray-400 text-sm" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Date:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">Pick a date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 transition-all text-sm"
              />
              {selectedDate && (
                <button
                  onClick={() => setSelectedDate('')}
                  className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <Button
            variant="primary"
            onClick={() => {
              resetForm();
              setShowForm(true);
            }}
          >
            <FaPlus className="text-xs" />
            New Task
          </Button>
          {completedTasksCount > 0 && (
            <Button
              variant="secondary"
              onClick={handleDeleteCompleted}
            >
              <FaTrash className="text-xs" />
              Clear Completed
            </Button>
          )}
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-12 text-center border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col items-center justify-center">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-4">
                <FaTasks className="text-3xl text-gray-300 dark:text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {searchQuery
                  ? 'No tasks found'
                  : selectedDate
                  ? `No tasks found for ${new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
                  : filter === 'active'
                  ? 'No active tasks'
                  : filter === 'completed'
                  ? 'No completed tasks'
                  : 'No tasks yet'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-5 max-w-md text-sm">
                {searchQuery
                  ? 'Try adjusting your search terms'
                  : selectedDate
                  ? 'Try selecting a different date or create a new task'
                  : filter === 'active'
                  ? 'All your tasks are completed! Great job!'
                  : filter === 'completed'
                  ? 'Complete some tasks to see them here'
                  : 'Get started by creating your first task'}
              </p>
              {!searchQuery && filter === 'all' && (
                <Button
                  variant="primary"
                  onClick={() => {
                    resetForm();
                    setShowForm(true);
                  }}
                >
                  <FaPlus className="text-xs" />
                  Create Your First Task
                </Button>
              )}
            </div>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`bg-white dark:bg-gray-900 rounded-lg p-5 border transition-colors ${
                task.completed
                  ? 'border-gray-100 dark:border-gray-800 opacity-60'
                  : 'border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => handleToggleComplete(task.id)}
                  className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    task.completed
                      ? 'bg-green-500 border-green-500 dark:bg-green-600 dark:border-green-600'
                      : 'border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-400'
                  }`}
                >
                  {task.completed && <FaCheck className="text-white text-xs" />}
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3
                      className={`font-medium text-sm ${
                        task.completed
                          ? 'line-through text-gray-400 dark:text-gray-500'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {task.title}
                    </h3>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {getPriorityIcon(task.priority)}
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${getPriorityBadgeColor(task.priority)}`}>
                        {task.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  {task.description && (
                    <p
                      className={`text-xs mb-2.5 ${
                        task.completed
                          ? 'text-gray-300 dark:text-gray-600 line-through'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {task.description}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 flex-wrap">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>Created {new Date(task.createdAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    {task.dueDate && (
                      <div className={`flex items-center gap-1 ${
                        new Date(task.dueDate) < new Date() && !task.completed
                          ? 'text-red-500 dark:text-red-400 font-medium'
                          : new Date(task.dueDate) <= new Date(new Date().setDate(new Date().getDate() + 1)) && !task.completed
                          ? 'text-orange-500 dark:text-orange-400 font-medium'
                          : ''
                      }`}>
                        <FaCalendarAlt className="text-xs" />
                        <span>Due {new Date(task.dueDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                    )}
                    {task.updatedAt !== task.createdAt && (
                      <span className="text-gray-300 dark:text-gray-600">
                        Updated {new Date(task.updatedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => handleEdit(task)}
                    disabled={task.completed}
                    className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
                      task.completed
                        ? 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                        : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                    }`}
                    title="Edit task"
                  >
                    <FaEdit className="text-xs" />
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg transition-colors hover:bg-red-100 dark:hover:bg-red-900/30 flex items-center justify-center"
                    title="Delete task"
                  >
                    <FaTrash className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Task Form Modal */}
      <TaskModal
        isOpen={showForm}
        onClose={resetForm}
        formData={formData}
        editingTask={editingTask}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
      />
    </div>
  );
}
