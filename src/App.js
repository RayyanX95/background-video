import React from 'react';

import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import './App.css';

function App() {
  return (
    <div style={{ height: ''}} >
      <BackgroundVideo />

      <div style={{ height: 1500, backgroundColor: 'red' }} >
      </div>
    </div>
  );
}

export default App;
