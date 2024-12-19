import React from "react";
import Navbar from "./navbar";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <Navbar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
      {children}
    </div>
  );
};

export default layout;
