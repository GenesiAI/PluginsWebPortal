import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { Twitter } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    socialIcons: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
    },
    icon: {
        margin: theme.spacing(1),
    },
}));

const SocialsBox: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.socialIcons}>
            {/* <Facebook className={classes.icon} /> */}
            <Link to="https://twitter.com/aipluginApp" target="_blank">
                <Twitter className={classes.icon} />
            </Link>
            {/* <LinkedIn className={classes.icon} />
             <Instagram className={classes.icon} /> */}
        </Box>
    )
};

export default SocialsBox;