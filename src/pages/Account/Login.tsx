// src/components/LoginPage.tsx
import { Button, Input } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Save the value X to localStorage (you can also use sessionStorage or cookies)
    localStorage.setItem('X', 'loggedIn');
    navigate('/your-plugins');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-black text-white">
      <h1 className="block m-2">Login</h1>
      <Input
        className="block m-2 bg-gray-800 text-white p-1 rounded resize-none"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

      <Input
        className="block m-2 bg-gray-800 text-white p-1 rounded resize-none"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button  className="block m-4" onClick={handleLogin}>Continue</Button>
    </div>
  );
};

export default LoginPage;
