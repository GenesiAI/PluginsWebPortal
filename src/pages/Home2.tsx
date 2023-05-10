import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { Button, Typography } from '@mui/material';
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
  const navigate = useNavigate();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const GoToLogin = async () => {
    navigate('/login');
  };


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

      {/* Waitlist Section */}
      {/* <div className="m-6">
        <h3 className="text-xl mb-2">Join our waitlist</h3>
        <input
          className="block w-full md:w-1/2 bg-gray-200 text-black p-2 rounded mb-2"
          type="email"
          placeholder="Your email"
        />
        <button
          className={`py-2 px-6 rounded bg-${colors[colorIndex].replace('#', '')} hover:bg-${colors[(colorIndex + 1) % colors.length].replace('#', '')} text-white`}
          onClick={handleButtonClick}
        >
          Join the waitlist
        </button>
      </div> */}
      {/* End of Waitlist Section */}

      <Button
        variant="contained"
        sx={{
          backgroundColor: colors[colorIndex],
          color: 'white',
          '&:hover': {
            backgroundColor: colors[(colorIndex + 1) % colors.length],
          },
        }}
        onClick={GoToLogin}
      >
        START TO CREATE 🧩
      </Button>
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
  // <YourPlugins plugins={result} />

};

export default TextToPlugin;