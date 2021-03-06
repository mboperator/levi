import React from 'react';
import { render } from 'react-dom';
import App from './App';

require('grommet/grommet.min.css');

document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('#mountPoint');
  render(<App />, node);
});
