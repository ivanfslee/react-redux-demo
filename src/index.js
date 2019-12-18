import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. to wire-up redux/react app, we need react-redux.
// We need the Provider ReactComponent to wrap around entire App

import { Provider } from 'react-redux';

// 2. Create redux store, so that redux exists and provider has a store to interface with
import { createStore } from 'redux';

// 3. reducers to populate the store
// 3a. We always start with a rootReducer
// 4. make individual reducers to hand to the rootreducer 
import rootReducer from './reducers/rootReducer';

// 5. create the store by passing it the root rootReducer, which is made up of all the reducers 
const theStore = createStore(rootReducer);


// Provider is the glue between react and redux. Give it the store
ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
