import React, { createContext, useState } from 'react';

// Context
const activeContext = createContext();

// Provider Component
const activeProvider = ({ children }) => {
  const [state, setState] = useState({
    active: 'home', // Example state
  });

  return (
    <activeContext.Provider value={{ state, setState }}>
      {children}
    </activeContext.Provider>
  );
};

export { activeContext, activeProvider };
