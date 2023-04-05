import React from 'react';
import { Box } from '@mui/material';
import { Twitter } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
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