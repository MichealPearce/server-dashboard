import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'

import Store from './Store'
import App from './App';

ReactDOM.render(
    <Provider store={Store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);