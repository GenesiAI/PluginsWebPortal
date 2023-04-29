import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Plugin } from '../models/Plugin';
import GeneratingPlugin from './GeneratingPlugin';
import YourPlugins from './YourPlugins';

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
    const [view, setView] = useState<'input' | 'generating' | 'result'>('input');
    const [result, setResult] = useState<Plugin[] | null>(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 150);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleButtonClick = async () => {
        const userId = uuidv4();
        setView('generating');

        // const response = await fetch(`https://aiplugin-api.azurewebsites.net/Plugin/${userId}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: '"Lorem ipsum placeholder"',
        // });


        // const result: Plugin[] = await response.json();
        // console.log(pluginResult);

        const mockedPlugins: Plugin[] = [
            {
                aiPlugin: 'Plugin 1',
                name: 'Awesome Plugin 1',
                url: 'https://www.example.com/plugin1',
                iconUrl: 'https://thumbs.dreamstime.com/t/hi-tech-circuit-style-round-yggdrasil-tree-cyberpunk-futuristic-design-progress-symbol-styled-frame-elements-borders-blue-deep-115165758.jpg',
                userId: 'user1',
            },
            {
                aiPlugin: 'Plugin 2',
                name: 'Awesome Plugin 2',
                url: 'https://www.example.com/plugin2',
                iconUrl: 'https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/arasaka-corpo-logo-cyberpunk-2077-wiki-guide.png',
                userId: 'user1',
            },
            {
                aiPlugin: 'Plugin 3',
                name: 'Awesome Plugin 3',
                url: 'https://www.example.com/plugin3',
                iconUrl: 'https://img.rankedboost.com/wp-content/plugins/cyberpunk-2077/assets/icons/Intelligence.png',
                userId: 'user1',
            },
        ];

        setResult(mockedPlugins);
        setView('result');
    };

    if (view === 'input') {
        return (
            <Box
                sx={{
                    padding: 2,
                    minHeight: '150vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'background.default',
                    color: 'text.primary',
                }}
            >
                <Typography variant="h2" align="center">
                    Build{' '}
                    <span style={{ color: colors[colorIndex] }}>your</span>
                    <br />
                    ChatGPT{' '}
                    <span style={{ color: colors[colorIndex] }}>plugin in</span>
                    <br />
                    less than <span style={{ color: colors[colorIndex] }}>2 minutes</span>
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <TextField
                    label="Input your text (More is better)"
                    variant="filled"
                    multiline
                    minRows={4}
                    maxRows={6}
                    sx={{
                        width: '90%', // Updated width for mobile devices
                        maxWidth: '70%', // Set max width for larger screens
                        backgroundColor: '#1f1f1f',
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 1,
                        },
                        '@media (min-width:600px)': {
                            width: '70%', // Width for larger screens
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
                        fontSize: '1rem', // Updated font size for mobile devices
                        '@media (min-width:600px)': {
                            fontSize: '1.2rem', // Font size for larger screens
                        },
                    }}
                    onClick={handleButtonClick}
                >
                    Create 🧩
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                {/* Waitlist Section */}
                <Typography variant="subtitle1">
                    Join our exclusive waitlist to unlock AI-powered plugin creation
                </Typography>
                <TextField
                    label="Your email"
                    variant="filled"
                    sx={{
                        marginTop: 1,
                        backgroundColor: 'background.paper',
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 1,
                        },
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        marginTop: 1,
                        borderRadius: 1,
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: colors[(colorIndex + 1)]
                        }
                    }}
                    onClick={handleButtonClick}>
                    Join the waitlist
                </Button>
                {/* End of Waitlist Section */}
                <Box sx={{ flexGrow: 1 }} />
                {/* How It Works Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: 800,
                        marginBottom: 4,
                    }}
                >
                    {[
                        {
                            step: 1,
                            title: 'Put Your Text',
                            icon: '📝',
                            description: 'Input your text and let the magic begin',
                        },
                        {
                            step: 2,
                            title: 'AI Builds the Plugin',
                            icon: '🧠',
                            description: 'AI works its magic in just a few seconds',
                        },
                        {
                            step: 3,
                            title: 'Get the URL',
                            icon: '🔗',
                            description: 'Instantly receive the plugin URL for ChatGPT',
                        },
                        {
                            step: 4,
                            title: 'Edit the Plugin',
                            icon: '✏️',
                            description: 'Alpha feature: Customize your plugin as desired',
                        },
                    ].map(({ step, title, icon, description }) => (
                        <Box
                            key={step}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h3">{step}</Typography>
                            <Typography variant="subtitle1">{title}</Typography>
                            <Typography>{icon}</Typography>
                            <Typography variant="body2">{description}</Typography>
                        </Box>
                    ))}
                </Box>
                {/* End of How It Works Section */}
                <Box sx={{ flexGrow: 1 }} />
            </Box >
        );
    } else if (view === 'generating') {
        return <GeneratingPlugin />;
    } else if (view === 'result' && result) {
        return <Box
            sx={{
                padding: 4,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                color: 'white',

            }}
        ><YourPlugins plugins={result} /></Box>;
    } else {
        return null;
    }
};

export default TextToPlugin;