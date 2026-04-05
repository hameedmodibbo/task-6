import React from 'react';

// Header component that displays the title and subtitle
// Props: title (string), subtitle (string)
const Header = ({ title, subtitle }) => {
  return (
    <React.Fragment>
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 rounded-lg shadow-lg mb-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">{title}</h1>
          <p className="text-xl opacity-90">{subtitle}</p>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;