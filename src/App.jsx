import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TopBar from './components/TopBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);




  // const handleLogout = () => {
  //   // logout logic would go here
  //   setIsLoggedIn(false);
  // };



  return (
    <>
    {isLoggedIn ? (
      <>
        <h1>AdVitals</h1>
        <TopBar /><SideBar />
        <Dashboard />
      </>
    ) : (
      <Login />
    )}
  </>
  )
}

export default App
