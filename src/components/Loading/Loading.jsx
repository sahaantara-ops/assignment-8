import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-fuchsia-500 border-t-transparent border-solid rounded-full animate-spin mb-4"></div>
      <p className="text-fuchsia-700 font-medium">Loading...</p>
    </div>
  );
};

export default Loading;