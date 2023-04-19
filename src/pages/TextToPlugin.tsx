import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const colors = [
    '#df66da',
    '#d773ec',
    '#cf81fe',
    '#c48fff',
    '#b99ef0',
    '#aeade1',
    '#a3bcd2',
    '#98cbc3',
    '#8ddab4',
    '#82e9a5',
    '#77f896',
    '#6cff87',
    '#62f678',
    '#58ed69',
    '#67ea7a',
    '#76e78b',
    '#85e49c',
    '#94e1ad',
    '#a3debe',
    '#b2dbcf',
    '#c1d8e0',
    '#d0d5f1',
    '#dfcffc',
    '#eec8fd',
    '#eebaef',
    '#eeacdf',
    '#ee9ece',
    '#ee90bd',
    '#ee82ac',
    '#ee749b',
    '#ee668a',
    '#f73da4',
    '#ef4bb6',
    '#e758c8',
];


const TextToPlugin: React.FC = () => {
    const [colorIndex, setColorIndex] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 150);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const navigate = useNavigate();

    const handleButtonClick = async () => {
        const userId = uuidv4();
        navigate('/generating-plugin');

        const response = await fetch(`https://aiplugin-api.azurewebsites.net/Plugin/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: '"Lorem ipsum placeholder"',
        });
        //manage fallback 
        const result = await response.json();
        navigate('/your-plugins', { state: { result } });
    };

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
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="h2" align="center">
                Build{' '}
                <span style={{ color: colors[colorIndex] }}>your</span>
                <br />
                ChatGPT{' '}
                <span style={{ color: colors[colorIndex] }}>plugin in</span>
                <br />
                less than <span style={{ color: colors[colorIndex] }}>2 minutes</span>
            </Typography>
            <Box sx={{ flexGrow: 0.5 }} />
            <TextField
                label="Input your text (500-5000 characters)"
                variant="filled"
                multiline
                minRows={4}
                maxRows={6}
                sx={{
                    width: '70%',
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 1,

                    },
                }}
            />
            <Button
                variant="contained"
                sx={{
                    marginTop: 2,
                    borderRadius: 1,
                    backgroundColor: colors[colorIndex],
                    color: 'white',
                    '&:hover': {
                        backgroundColor: colors[(colorIndex + 1) % colors.length],
                    },
                    fontSize: '1.2rem',
                }}
                onClick={handleButtonClick}
            >
                Create 🧩
            </Button>
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    );
};

export default TextToPlugin;




// curl "https://aiplugin-api.azurewebsites.net/Plugin/e0853e8e-58b7-4715-9034-bb237d427ded" ^
//   -H "sec-ch-ua: ^\^"Not.A/Brand^\^";v=^\^"8^\^", ^\^"Chromium^\^";v=^\^"114^\^", ^\^"Microsoft Edge^\^";v=^\^"114^\^"" ^
//   -H "sec-ch-ua-platform: ^\^"Android^\^"" ^
//   -H "Referer: http://localhost:3000/" ^
//   -H "sec-ch-ua-mobile: ?1" ^
//   -H "User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36 Edg/114.0.0.0" ^
//   -H "Content-Type: application/json" ^
//   --data-raw "^{^\^"text^\^":^\^"Lorem ipsum placeholder^\^"^}" ^
//   --compressed

//   curl --location 'https://aiplugin-api.azurewebsites.net/Plugin/79720a56-fbc1-46b9-a0f9-afe00de175dc' \
// --header 'Content-Type: application/json' \
// --header 'Accept: text/plain' \
// --data '"Test"'