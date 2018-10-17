import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import theReducers from './reducers'
import * as Actions from './actions'


const store = createStore(theReducers)

const unsubscribe = store.subscribe(() => {
  console.log('state: ', store.getState())
})


store.dispatch(Actions.createPuppy({
    name: 'Tony',
    breed: 'Tiger Dog',
    available: true,
    id: 1,
  }))

store.dispatch(Actions.createPuppy({
    name: 'Priscilla',
    breed: 'Aussie Shepherd',
    available: true,
    id: 2,
  }))

store.dispatch(Actions.adoptPuppy(2))

store.dispatch(Actions.updateFilter('SHOW_UNAVAILABLE'))

unsubscribe()

ReactDOM.render(<App />, document.getElementById('root'));
