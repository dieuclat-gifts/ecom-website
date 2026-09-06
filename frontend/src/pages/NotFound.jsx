import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-red-500 mb-2">404</h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
