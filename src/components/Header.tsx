import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User } from "firebase/auth";
import axios from 'axios';
import { auth } from '../security/firebase';

const loggedInPages = ['Your Plugins', 'contacts', 'Logout'];
const loggedOutPages = ['contacts', 'Login'];

const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    const auth = getAuth();
    await signInWithPopup(auth, provider);
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.idToken;
    // auth?.currentUser?.getIdToken()
    //   .then(function (idToken: string) {
    //     console.info("token\n" + idToken);
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;
    //   });
    navigate("your-plugins")
  }

  axios.interceptors.request.use(async config => {
    const auth = getAuth();
    console.info("auth:", JSON.stringify(auth));
    if (auth?.currentUser) {
      const token = await auth.currentUser.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      await handleLogin();
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    setUser(null);
    navigate("/")
  };

  // auth?.currentUser?.getIdToken(/* forceRefresh */ true).then(function (idToken) {
  //   console.log("tokex: " + idToken);
  // });
  const links = user ? loggedInPages : loggedOutPages;

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.4rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Genesi AI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((link) => {
                if (link.toLowerCase() === 'login' || link.toLowerCase() === 'logout') {
                  return (
                    <MenuItem
                      key={link}
                      onClick={link.toLowerCase() === 'login' ? handleLogin : handleLogout}
                    >
                      <Typography textAlign="center">{link}</Typography>
                    </MenuItem>
                  );
                }
                return (
                  <MenuItem
                    key={link}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                  >
                    <Typography textAlign="center">{link}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Genesi AI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {links.map((link) => {
              if (link.toLowerCase() === 'login' || link.toLowerCase() === 'logout') {
                return (
                  <Button
                    key={link}
                    onClick={link.toLowerCase() === 'login' ? handleLogin : handleLogout}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {link}
                  </Button>
                );
              }
              return (
                <Button
                  key={link}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={`/${link.toLowerCase().replace(' ', '-')}`}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {link}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}

export default ResponsiveAppBar;
