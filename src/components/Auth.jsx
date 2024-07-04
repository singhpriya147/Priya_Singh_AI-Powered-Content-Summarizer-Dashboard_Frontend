
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css'
const Auth = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication
    localStorage.setItem('user', username);
    navigate('/dashboard');
  };

  return (
    <div className='auth'>
      <div className='auth-main'>
        <h2>Login</h2>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter username'
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Auth;
