import React from 'react';
import ReactDOM from 'react-dom';
import  { GlobalStyle } from './style.js'
import  { IconFontStyle } from './statics/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
   <GlobalStyle/>
   <IconFontStyle/>
   <App />
  </React.StrictMode>,
  document.getElementById('root')
);

