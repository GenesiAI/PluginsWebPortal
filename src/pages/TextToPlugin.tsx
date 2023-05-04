import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { Button, Typography } from '@mui/material';
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
    // const userId = uuidv4();
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
      <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-black text-white">
        <div className='m-8'>
          <Typography variant="h2" align="center">
            Build{' '}
            <span style={{ color: colors[colorIndex] }}>your</span>
            <br />
            ChatGPT{' '}
            <span style={{ color: colors[colorIndex] }}>plugin in</span>
            <br />
            less than <span style={{ color: colors[colorIndex] }}>2 minutes</span>
          </Typography>
        </div>
        <textarea
          className="block w-full md:w-3/4 bg-gray-800 text-white p-3 rounded resize-none"
          rows={4}
          placeholder="Input your text (More is better)"
        ></textarea>
        <div className={'m-6 py-2 px-6 rounded-md text-white text-xl md:text-2xl'}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors[colorIndex],
              color: 'white',
              '&:hover': {
                backgroundColor: colors[(colorIndex + 1) % colors.length],
              },
            }}
            onClick={handleButtonClick}
          >
            Create 🧩
          </Button>
        </div>
        {/* Waitlist Section */}
        {/* <h3 className="text-xl mb-2">Join our exclusive waitlist to unlock AI-powered plugin creation</h3> */}
        {/* <input
          className="block w-full md:w-1/2 bg-gray-200 text-black p-2 rounded mb-2"
          type="email"
          placeholder="Your email"
        /> */}
        {/* <button
          className={`py-2 px-6 rounded bg-${colors[colorIndex].replace('#', '')} hover:bg-${colors[(colorIndex + 1) % colors.length].replace('#', '')} text-white`}
          onClick={handleButtonClick}
        >
          Join the waitlist
        </button> */}
        {/* End of Waitlist Section */}
        {/* How It Works Section */}
        <div className="m-4 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mb-8">
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
              description: 'Alpha feature: Customize yourplugin as desired',
            },
          ].map(({ step, title, icon, description }) => (
            <div key={step} className="m-6 flex flex-col items-center">
              <h3 className="text-3xl mb-2">{step}</h3>
              <h4 className="text-xl mb-2">{title}</h4>
              <div className="text-2xl mb-2">{icon}</div>
              <h6 className="text-sm text-gray-300 text-center">{description}</h6>
            </div>
          ))}
        </div>
        {/* End of How It Works Section */}
      </div>
    );
  } else if (view === 'generating') {
    return <GeneratingPlugin />;
  } else if (view === 'result' && result) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-black text-white">
        <YourPlugins plugins={result} />
      </div>
    );
  } else {
    return null;
  }
};

export default TextToPlugin;