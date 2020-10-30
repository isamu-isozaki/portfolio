/**
 * Author: Isamu Isozaki
 * Root of react app
 * TODO:
 * 1. Setup Stacks for Experience and Projects and highlight some you are proud of-> 
 * fix styling
 * 2. Replace contacts with logo of linkedIn, facebook, etc
 * 3. Add link to Resume
 * 4. Build
 * 5. Start on Ionos server using p2
 * 6. Link to nginx
 * 7. Add encryption to nginx
 * 8. Search engine optimization
 * QOL TODO:
 * 1. Add cool css animation
 * 2. Make site represent me some how
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, ColorModeProvider, theme } from "@chakra-ui/core";
import '../node_modules/video-react/dist/video-react.css';
import './index.css';
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
