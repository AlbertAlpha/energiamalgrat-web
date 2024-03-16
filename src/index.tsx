import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// fonts
import '@fontsource/plus-jakarta-sans/latin.css';
import '~/styles/globals.css';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
