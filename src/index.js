import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/indexStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const baseUrl = 'http://localhost:3333'

root.render(
    <Router>
        <Provider store = {store}>
            <App/>
        </Provider>
    </Router>
);