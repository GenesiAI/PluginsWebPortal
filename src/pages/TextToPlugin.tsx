// TextToPlugin.tsx page which is the main landing page, it must be as cool as possible like every startup landing with a big text in the center "Build your [newline] ChatGPT plugin [newlone] in less than 2 minutes" with "your", "plugin", and  "in 2 minutes" more in evidence, if possible add a loop effect of some way, all should fit, black background is advised, under the title a textfield and a button, over the text field "input your text (500-5000)", if the text do not fit the textfield it should expand vertically.
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const colors = [
    '#03DAC5',
    '#1BD2BC',
    '#33C8B3',
    '#4BBEAA',
    '#63B4A1',
    '#7BAA98',
    '#93A08F',
    '#AB9686',
    '#C38C7D',
    '#DB8274', // imporve transition, do not use orange like here the next is purple
    '#BB86FC',
    '#C27FF1',
    '#C97AE8',
    '#D175DF',
    '#D970D6',
    '#E16BCD',
    '#E966C4',
    '#F161BB',
    '#F95CB2',
    '#FC3F94', // smoother transition
    '#E6408C',
    '#D04184',
    '#B37493',
    '#A57BA0',
    '#9882AD',
    '#8B89BA',
    '#7E90C7',
    '#7197D4',
    '#649EE1',
    '#57A5EE',
];


const TextToPlugin: React.FC = () => {
    const [colorIndex, setColorIndex] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 200);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                color: 'white',
            }}
        >
            {/* make the title be in the center between the top and the textflied */}
            <Typography variant="h2" align="center">
                Build {' '}
                <span style={{ color: colors[colorIndex] }}>your</span>
                <br />
                ChatGPT{' '}
                <span style={{ color: colors[colorIndex] }}>plugin in</span>
                <br />
                less than <span style={{ color: colors[colorIndex] }}>2 minutes</span>
            </Typography>
            {/* whent the text moves it has to go a little higher */}
            {/* make the angles rounded, the background gray */}
            <TextField
                label="Input your text (500-5000)"
                variant="outlined"
                multiline
                minRows={4}
                maxRows={6}
                sx={{ width: '70%', backgroundColor: 'white', marginTop: 2 }}
            />
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Create
            </Button>
        </Box>
    );
};

export default TextToPlugin;
