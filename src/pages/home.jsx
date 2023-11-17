import React from 'react'
import '../styles/svg.css'

const home = () => {
  return (
    <div className="w-[350px] mx-auto my-4 bg-white rounded-md overflow-hidden shadow-md">
      <img
        className="w-full h-48 object-cover object-center"
        src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt='economy'// Replace with your image URL
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quasi ut molestias officia eligendi dolorum sint voluptatibus impedit, voluptas similique quos possimus, officiis dicta odit nemo nam at. Sunt, tenetur.</p>
        <button
          className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
        >
          Click me
        </button>
      </div>
    </div>
  )
}

export default home