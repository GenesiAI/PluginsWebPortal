// // src/components/LoginPage.tsx
// import { Button, Input, useTheme } from '@mui/material';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Use theme hook to access the theme colors
//   const theme = useTheme();

//   const handleLogin = () => {
//     // Save the value X to localStorage (you can also use sessionStorage or cookies)
//     localStorage.setItem('X', 'loggedIn');
//     navigate('/your-plugins');
//   };

//   return (
//     <div style={{ 
//       minHeight: "100vh", 
//       display: "flex", 
//       flexDirection: "column", 
//       justifyContent: "center", 
//       alignItems: "center", 
//       padding: theme.spacing(1),
//     }}>
//       <h1 style={{ margin: theme.spacing(1) }}>Login</h1>
//       <Input
//         style={{ 
//           margin: theme.spacing(1), 
//           padding: theme.spacing(0.25),
//           borderRadius: theme.shape.borderRadius
//         }}
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)} />

//       <Input
//         style={{ 
//           margin: theme.spacing(1), 
//           padding: theme.spacing(0.25),
//           borderRadius: theme.shape.borderRadius
//         }}
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button style={{ margin: theme.spacing(2) }} onClick={handleLogin}>Continue</Button>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User } from "firebase/auth";
import axios from 'axios';
import { auth } from '../../security/firebase';

const provider = new GoogleAuthProvider();

const Login: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.idToken;
    console.info(token);
    // You can now use this token with your axios instance:
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    setUser(null);
    // Remove the token from your axios instance
    delete axios.defaults.headers.common["Authorization"];
  };

  // auth?.currentUser?.getIdToken(/* forceRefresh */ true).then(function (idToken) {
  //   console.log("tokex: "+ idToken);
  // });

  return (
    <div>
      {!user && <button onClick={handleLogin}>Login</button>}
      username {user?.displayName} <br />
      email {user?.email} <br />
    </div>
  );
};

export default Login;
