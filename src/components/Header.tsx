import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  color: theme.palette.primary.main,
  textDecoration: 'none',
  whiteSpace: 'nowrap',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledNavLinks = styled('nav')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  width: '60%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  minWidth: '20px',
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const StyledHomeLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: '40%',
  textDecoration: 'none',
}));

const Header: React.FC = () => {
  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <StyledHomeLink to="/">
          <StyledTitle variant="h4">AI PLUGIN 🧩</StyledTitle>
        </StyledHomeLink>
        <StyledNavLinks>
          {/* <StyledLink to="/plugins">
            <Button color="primary">Plugins</Button>
          </StyledLink>
          <StyledLink to="/build-plugin">
            <Button color="primary">Build a plugin</Button>
          </StyledLink>
          <StyledLink to="/hire-dev">
            <Button color="primary">Hire a dev</Button>
          </StyledLink> */}
          <StyledLink to="/login">
            <Button color="primary">Login</Button>
          </StyledLink>
          <StyledLink to="/contacts">
            <Button color="primary">Contacts</Button>
          </StyledLink>
        </StyledNavLinks>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
