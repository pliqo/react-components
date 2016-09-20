import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

render(
  <App url="https://raw.githubusercontent.com/nickbalestra/appUno/master/initialdata.json" pollInterval={2000} />,
  document.getElementById('root')
);
