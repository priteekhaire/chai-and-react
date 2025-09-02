import React from 'react'

function Card({channel,btnText}) {
  return (
    console.log(channel,btnText),
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-72 bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Profile"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-white/50 flex flex-col justify-end p-4">
            <h2 className="text-white text-lg font-bold">{channel}</h2>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <button className="mt-3 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
              {btnText}→
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card