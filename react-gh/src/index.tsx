import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles } from '@fluentui/react';
import reportWebVitals from './reportWebVitals';


/*import {createRoot} from 'react-dom/';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

// wrap App in Router
root.render(
  <Router>
    <App />
  </Router>
);
*/


// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
