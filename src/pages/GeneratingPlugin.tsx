import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import './GeneratingPlugin.css';

const GeneratingPlugin: React.FC = () => {
  return (
    <div className="generating-plugin">
      <div className="loading-container">
        <FontAwesomeIcon icon={faCog} className="loading-gear" />
        <div className="loading-text">
          <h1>Generating your plugin...</h1>
        </div>
      </div>
    </div>
  );
};

export default GeneratingPlugin;
