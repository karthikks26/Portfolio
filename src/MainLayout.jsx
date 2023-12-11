import { createContext, useEffect, useState } from "react";

export const context = createContext(null);

const MainLayout = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode") === "true";

  const [state, setState] = useState(storedDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", state.toString());
  }, [state]);

  const handleclick = () => {
    setState(!state);
  };

  return (
    <>
      <context.Provider value={{ handleclick, state, setState }}>
        {children}
      </context.Provider>
    </>
  );
};

export default MainLayout;
