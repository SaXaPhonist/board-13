import { ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import theme from 'themeSettings';
import App from './app';
import 'index.css';

const root = document.createElement('div');
root.className = 'root';
document.body.append(root);
// const googleMapScript = document.createElement('scrip');
// googleMapScript.setAttribute('src', mapUrl)

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  root,
);
