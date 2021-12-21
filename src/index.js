import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './webcss.css';

import { Helmet } from 'react-helmet';

ReactDOM.render(
  <React.Fragment>
    <Helmet>
      <meta name="google-site-verification" content="pz0sIyotJMp33X3fkUWaHZMqPERaU8OQMLHv2foqKAw" />
    </Helmet>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
