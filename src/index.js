import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App from './lab1/App';
// import App from './lab2/App';
// import App from './lab3/App';
// import App from './lab4/App';
// import App from './lab5/App';
import App from './lab6/App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
