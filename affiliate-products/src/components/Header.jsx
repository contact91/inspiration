import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Product Recommendations</h1>
        <p className="text-lg opacity-90">Discover the best products handpicked for you</p>
      </div>
    </header>
  );
};

export default Header;
