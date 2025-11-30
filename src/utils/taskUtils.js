import { FaFlag } from 'react-icons/fa';

export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'text-red-500 dark:text-red-400';
    case 'medium':
      return 'text-yellow-500 dark:text-yellow-400';
    case 'low':
      return 'text-green-500 dark:text-green-400';
    default:
      return 'text-gray-500 dark:text-gray-400';
  }
};

export const getPriorityBadgeColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-300 dark:border-red-700';
    case 'medium':
      return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700';
    case 'low':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-300 dark:border-green-700';
    default:
      return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-700';
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 'high':
      return <FaFlag className="text-red-500 dark:text-red-400" />;
    case 'medium':
      return <FaFlag className="text-yellow-500 dark:text-yellow-400" />;
    case 'low':
      return <FaFlag className="text-green-500 dark:text-green-400" />;
    default:
      return <FaFlag className="text-gray-500 dark:text-gray-400" />;
  }
};

export const getPriorityBorderColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'border-red-500 bg-red-50 dark:bg-red-950/20 dark:border-red-400';
    case 'medium':
      return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-400';
    case 'low':
      return 'border-green-500 bg-green-50 dark:bg-green-950/20 dark:border-green-400';
    default:
      return 'border-gray-500 bg-gray-50 dark:bg-gray-900/20 dark:border-gray-400';
  }
};

