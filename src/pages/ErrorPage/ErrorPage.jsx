import React from 'react';
import errorImage from '../../assets/error-404.png';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-6 text-center">
      {/* Error Image */}
      <img
        src={errorImage}
        alt="404 Error"
        className="w-80 h-80 md:w-96 md:h-96 object-contain mb-6 animate-pulse"
      />

      {/* Main Text */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-700 text-lg md:text-xl mb-6">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 bg-fuchsia-700 text-white font-semibold rounded-lg shadow-lg hover:bg-fuchsia-600 transition duration-300 transform hover:scale-105"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;