import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Affiliate Products. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              This site contains affiliate links. We may earn a commission when you purchase through these links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
