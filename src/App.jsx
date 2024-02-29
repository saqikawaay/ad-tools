import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);




  // const handleLogout = () => {
  //   // logout logic would go here
  //   setIsLoggedIn(false);
  // };



  return (
    <>
    {isLoggedIn ? (
      <>
        <h1>AdVitals</h1>
        <Dashboard /><SideBar /><TopBar />
      </>
    ) : (
      <Login />
    )}
  </>
  )
}

export default App
