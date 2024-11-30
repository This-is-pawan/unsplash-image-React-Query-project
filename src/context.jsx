import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
const AppContext = createContext();

const getInitialDarkMode=()=>{
  const prefersDarkMode=window.matchMedia('(prefers-color-scheme:dark)').matches
  console.log(prefersDarkMode);
  
  return prefersDarkMode
}




// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  // const [isDarkTheme, setDarkTheme] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(getInitialDarkMode());
  const [searchTheme, setSearchTheme] = useState('dog');

  const toggleDarkTheme = () => {
   const newDarkTheme=!isDarkTheme
    setDarkTheme(newDarkTheme);
    // const body=document.querySelector('body');
    // // console.log(body);
    // body.classList.toggle('dark-theme',isDarkTheme)
  };
 useEffect(() => {
 document.body.classList.toggle('dark-theme',isDarkTheme)
 }, [isDarkTheme])

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme ,searchTheme,setSearchTheme}}>
      {children}
    </AppContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};
