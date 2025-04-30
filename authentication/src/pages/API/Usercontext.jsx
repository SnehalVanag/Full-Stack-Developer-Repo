import React, { createContext } from 'react';

export const DataContext = createContext();

function Usercontext({children}) {
    const serverURL="http://localhost:8000"
    const value = {
        serverURL
    }
  return (
    <dataContex.Provider value={value}>
        {children}
    </dataContex.Provider>  
  )
}

export default Usercontext
