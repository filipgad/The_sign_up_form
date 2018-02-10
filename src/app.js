import React from 'react';
import ReactDOM from 'react-dom';
import Form from './containers/Form';
import { Provider } from 'react-redux';
import store from './store';

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <Provider store={store}>
            <Form />
        </ Provider>,
        document.getElementById('app')
    );
});