import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(true);

export default function ContextProvider({ children }) {
  const [splashScreen, setSplashScreen] = useState(true);
  const [currSlide, setCurrSlide] = useState(0);
  const [cow, setCow] = useState({});
  //splash screen
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 1000);
  }, []);
  //next screen
  function nextSlide() {
    if (currSlide === 3) return;
    setCurrSlide(currSlide + 1);
  }
  const Value = {
    splashScreen,
    setSplashScreen,
    currSlide,
    nextSlide,
    cow,
    setCow,
  };
  return (
    <UserContext.Provider value={Value}> {children} </UserContext.Provider>
  );
}
