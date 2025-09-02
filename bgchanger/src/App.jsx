import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('olive');

  const colors = [
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'green' },
    { name: 'Blue', value: 'blue' },
    { name: 'Olive', value: 'olive' },
    { name: 'Gray', value: 'gray' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Pink', value: 'pink' },
    { name: 'Purple', value: 'purple' },
    { name: 'Lavender', value: 'lavender' },
    { name: 'White', value: 'white' },
  ];

  return (
    <div
      className="w-full h-screen transition-all duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-wrap justify-center gap-3 p-4">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setBgColor(color.value)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: color.value }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
