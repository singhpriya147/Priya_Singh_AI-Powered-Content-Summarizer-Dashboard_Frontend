// src/components/Auth.js
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication
    localStorage.setItem('user', username);
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Enter username'
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
