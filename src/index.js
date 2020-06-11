import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle="Animal Manager"/>, document.getElementById('root'));
registerServiceWorker();
