import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client'

import './test.css';
import App from './App.tsx';
import React from 'react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  