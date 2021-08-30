/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TestContextProvider } from './contexts/TestContext';

ReactDOM.render(
  <React.StrictMode>
    <TestContextProvider>
      <App />
    </TestContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
