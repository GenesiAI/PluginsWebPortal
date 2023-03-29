import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      overflowX: 'auto',
      width: '100%',
    },
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>AI PLUGIN 🧩</Typography>
        <nav className={classes.navLinks}>
          <Link to="/" className={classes.link}>
            <Button color="primary">Home</Button>
          </Link>
          <Link to="/plugins" className={classes.link}>
            <Button color="primary">Plugins</Button>
          </Link>
          <Link to="/build-plugin" className={classes.link}>
            <Button color="primary">Build a Plugin</Button>
          </Link>
          <Link to="/hire-dev" className={classes.link}>
            <Button color="primary">Hire a Dev</Button>
          </Link>
          <Link to="/contacts" className={classes.link}>
            <Button color="primary">Contacts</Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
