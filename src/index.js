import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

const Index = () => {
  setToLS('all-themes', themes.default);
  return(
    <React.StrictMode>
    <App />
  </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Index />
);

//references:
//for set Theme:
//https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/
//for search bar:
//https://javascript.plainenglish.io/how-to-implement-a-search-bar-in-react-js-8cf8f5513b8e
//https://dev.to/salehmubashar/search-bar-in-react-js-545l
//https://dev.to/franciscomendes10866/how-to-create-a-search-bar-in-react-58nj
//https://www.codingdeft.com/posts/react-fetch-data-api/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
