import { createContext, useContext, useState } from "react";

const ContextStatus = createContext();
const ContextStatusProvider = ContextStatus.Provider;

function StatusProvider({ children }) {


  const [name,setName] = useState([]);

  return (
    <ContextStatusProvider value={{name,setName}}>
       {children}
    </ContextStatusProvider>
  );
}

function useStatus() {
  const all = useContext(ContextStatus);
  return all;
}

export { StatusProvider, useStatus };
