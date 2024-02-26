import { useState } from 'react';
import './Login.css'; // Import the CSS file
import Button from '@mui/material/Button';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log('Logging in', username);
        // Perform login here
        setIsLoading(false);
    };

    return (
        <div className="login-container">
            <h2>Welcome to Adtools</h2>
            <form onSubmit={handleLogin} className="login-form">
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <Button variant="contained" type="submit">Log in</Button>
            </form>
        </div>
    );
}

export default Login;