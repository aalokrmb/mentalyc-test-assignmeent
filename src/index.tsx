import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalContainer } from './components/Modal';
import { ProgressBar, Table } from 'react-bootstrap';
import PercentageList  from './components/percentageList'
import ProgressIndicator from './components/ProgressIndicator';
import StatusBar from './components/StatusBar';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
