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
    whiteSpace: 'nowrap',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  link: {
    minWidth: '20px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  homeLink: {
    color: theme.palette.text.primary,
    width: '40%',
    textDecoration: 'none',
  } 
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.homeLink}>
          <Typography variant="h4" className={classes.title}>AI PLUGIN 🧩</Typography>
        </Link>
        <nav className={classes.navLinks}>
          <Link to="/plugins" className={classes.link}>
            <Button color="primary">Plugins</Button>
          </Link>
          <Link to="/build-plugin" className={classes.link}>
            <Button color="primary">
              Build a plugin
            </Button>
          </Link>
          <Link to="/hire-dev" className={classes.link}>
            <Button color="primary">
              hire a dev
            </Button>
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
