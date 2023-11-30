import React from 'react';

const NavBar = () => (
    <nav className="flex justify-between items-center px-4 py-3 fixed w-full z-10 border-b bg-white">
      <div className="text-lg font-bold text-green-600">AIesthetics</div>
      <div className="space-x-4">
        <a href="#features" style={{ color: '#a98274' }} className="hover:text-gray-600">Features</a>
        <a href="#pricing" style={{ color: '#a98274' }} className="hover:text-gray-600">Pricing</a>
        <a href="#about-us" style={{ color: '#a98274' }} className="hover:text-gray-600">About Us</a>
        <a href="#contact" style={{ color: '#a98274' }} className="hover:text-gray-600">Contact</a>
      </div>
    </nav>
  );

export default NavBar;