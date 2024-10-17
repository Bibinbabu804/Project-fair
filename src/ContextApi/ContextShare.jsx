import React, { createContext, useState } from 'react';

// Create the contexts
export const addProjectContextResponse = createContext();
export const editProjectContextResponse = createContext();

function ContextShare({ children }) {
  // State variables to hold context values
  const [addProjectRes, setAddProjectRes] = useState('');
  const [editProjectRes, setEditProjectRes] = useState('');

  return (
    <div>
      {/* Providing context for adding project */}
      <addProjectContextResponse.Provider value={{ addProjectRes, setAddProjectRes }}>
        {/* Providing context for editing project */}
        <editProjectContextResponse.Provider value={{ editProjectRes, setEditProjectRes }}>
          {children}
        </editProjectContextResponse.Provider>
      </addProjectContextResponse.Provider>
    </div>
  );
}

export default ContextShare;
