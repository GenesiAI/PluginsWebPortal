import React from 'react';
import { Plugin } from '../models/Plugin';

const YourPlugins: React.FC<Plugin> = (props) => {
  return (
    <div>
      <h1>Your Plugins</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default YourPlugins;
