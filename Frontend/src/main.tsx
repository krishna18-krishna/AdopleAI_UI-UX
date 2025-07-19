import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Cursor from './components/Cursor.jsx';
import App from './App.jsx';
import 'aos/dist/aos.css';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Cursor />
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
