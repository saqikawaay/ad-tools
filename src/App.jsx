import { useState } from 'react'
import Login from './assets/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // login logic would go here

    console.log('Logging in', username);
    setIsLoggedIn(true);
  };


  const handleLogout = () => {
    // logout logic would go here
    setIsLoggedIn(false);
  };




  return (
    <>
    {isLoggedIn ? (
<App onLogout={handleLogout} />
) : (
<Login onLogin={handleLogin} />
)}

    
  </>
  )
}

export default App
