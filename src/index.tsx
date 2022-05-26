import React from 'react';
import './main.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeContextProvider from './ThemeContextProvider';


const html = document.getElementById('root') as HTMLElement
const root = createRoot(html)

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>,
)