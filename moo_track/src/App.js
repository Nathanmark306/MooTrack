import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/Splash_Screen/SplashScreen';
import Onboarding from './pages/onboarding/Onboarding';
import Welcome from './pages/welcomePage/Welcome';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import UserScreen from './pages/UserScreen/UserScreen';
import AddCow from './pages/addCows/AddCow';
import { UserContext } from './context/context';
const App = () => {
  const { splashScreen } = useContext(UserContext);
  return splashScreen ? (
    <SplashScreen />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/log-in' element={<LogIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/UserScreen' element={<UserScreen />} />
        <Route path='/addCow' element={<AddCow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
