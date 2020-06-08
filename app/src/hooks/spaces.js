import React, { createContext, useCallback, useState, useContext } from 'react';
import { findAllSpaces } from '../services/SpacesServices';

const SpacesContext = createContext({});

function SpacesProvider({ children }) {
  const [data, setData] = useState(() => []);

  const loadData = useCallback(async () => {
    console.log("aqui")
    let response = await findAllSpaces();
    response = await response;
    setData(response.data);
  }, []);

  return (
    <SpacesContext.Provider value={{ data: data, loadData }}>
      {children}
    </SpacesContext.Provider>
  );
}


async function useSpace() {

  const context = useContext(SpacesContext);

  if (!context) {
    throw new Error('useSpace must be used within an AuthProvider');
  }

  return context;
}

export { SpacesProvider, useSpace };
