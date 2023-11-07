import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-white py-4 mt-4">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Karthik KS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
