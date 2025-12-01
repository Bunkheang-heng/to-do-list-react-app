import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaTasks, 
  FaCheckCircle, 
  FaCircle,
  FaArrowRight,
  FaFlag,
  FaPlus,
  FaCalendarAlt
} from 'react-icons/fa';
import { useAuth } from '../hook/useAuth';
import { useTasks } from '../hook/useTasks';
import { useGreeting } from '../hook/useGreeting';
import { getPriorityColor, getPriorityBadgeColor } from '../utils/taskUtils';

const Home = () => {
  const { user } = useAuth();
  const { tasks, activeTasksCount, completedTasksCount } = useTasks(user?.id);
  const greeting = useGreeting();
  const navigate = useNavigate();

  const recentTasks = tasks
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);


  return (
    <section className="flex flex-col gap-8 max-w-6xl mx-auto w-full px-4 py-6">
      {/* Welcome Section */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-gray-900 dark:text-white tracking-tight">
              {greeting}{user?.fullName ? `, ${user.fullName.split(' ')[0]}` : ''}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              {tasks.length === 0 
                ? "Ready to get started? Create your first task!"
                : activeTasksCount === 0
                ? "All tasks completed! Great work!"
                : `You have ${activeTasksCount} active task${activeTasksCount !== 1 ? 's' : ''} to complete.`
              }
            </p>
          </div>
          <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
            <FaTasks className="text-3xl text-orange-600 dark:text-orange-400" />
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Total Tasks</p>
              <p className="text-3xl font-semibold text-gray-900 dark:text-white">{tasks.length}</p>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <FaTasks className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Active Tasks</p>
              <p className="text-3xl font-semibold text-gray-900 dark:text-white">{activeTasksCount}</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <FaCircle className="text-green-600 dark:text-green-400 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Completed</p>
              <p className="text-3xl font-semibold text-gray-900 dark:text-white">{completedTasksCount}</p>
            </div>
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <FaCheckCircle className="text-orange-600 dark:text-orange-400 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Tasks & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Tasks</h2>
            <button
              onClick={() => navigate('/task')}
              className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium flex items-center gap-1.5 transition-colors"
            >
              View All
              <FaArrowRight className="text-xs" />
            </button>
          </div>
          
          {recentTasks.length === 0 ? (
            <div className="text-center py-10">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                <FaTasks className="text-2xl text-gray-300 dark:text-gray-600" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">No tasks yet</p>
              <button
                onClick={() => navigate('/task')}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2 mx-auto"
              >
                <FaPlus className="text-xs" />
                Create Task
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              {recentTasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    task.completed
                      ? 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 opacity-60'
                      : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3
                          className={`font-medium text-sm ${
                            task.completed
                              ? 'line-through text-gray-400 dark:text-gray-500'
                              : 'text-gray-900 dark:text-white'
                          }`}
                        >
                          {task.title}
                        </h3>
                        <FaFlag className={`${getPriorityColor(task.priority)} text-xs`} />
                      </div>
                      {task.description && (
                        <p
                          className={`text-xs mb-2 ${
                            task.completed
                              ? 'line-through text-gray-300 dark:text-gray-600'
                              : 'text-gray-500 dark:text-gray-400'
                          } truncate`}
                        >
                          {task.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2.5 text-xs text-gray-400 dark:text-gray-500">
                        <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${getPriorityBadgeColor(task.priority)}`}>
                          {task.priority.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          <span>{new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                    </div>
                    {task.completed && (
                      <FaCheckCircle className="text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5 text-sm" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">Quick Actions</h2>
          <div className="space-y-2.5">
            <button
              onClick={() => navigate('/task')}
              className="w-full p-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <FaPlus className="text-sm" />
                <span className="text-sm">Create New Task</span>
              </div>
              <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={() => navigate('/task', { state: { filter: 'active' } })}
              className="w-full p-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 text-gray-900 dark:text-white rounded-lg font-medium transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <FaCircle className="text-green-500 dark:text-green-400 text-sm" />
                <span className="text-sm">View Active Tasks</span>
              </div>
              <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={() => navigate('/task', { state: { filter: 'completed' } })}
              className="w-full p-3.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 text-gray-900 dark:text-white rounded-lg font-medium transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500 dark:text-orange-400 text-sm" />
                <span className="text-sm">View Completed</span>
              </div>
              <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Progress Indicator */}
          {tasks.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Progress</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {Math.round((completedTasksCount / tasks.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-orange-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(completedTasksCount / tasks.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
