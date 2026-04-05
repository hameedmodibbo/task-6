import React, { useState, useEffect } from 'react';

// Counter component that manages fans count using useState and localStorage
// State: count (number) - tracks the number of fans
const Counter = () => {
  // Initialize state with value from localStorage or 0
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('realMadridFans');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // Save to localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem('realMadridFans', count.toString());
  }, [count]);

  // Event handler to increase the count
  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 mt-8 border-l-4 border-blue-600">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Real Madrid Fans Counter</h2>
      <div className="flex items-center justify-between">
        <div className="text-4xl font-extrabold text-blue-600">{count}</div>
        <button
          onClick={handleIncrease}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Fan +
        </button>
      </div>
      <p className="text-gray-600 mt-4">Click to increase the fan count! (Persisted in localStorage)</p>
    </div>
  );
};

export default Counter;