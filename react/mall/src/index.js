import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import data from './data';

let initialShoes = data;
let initialStocks = [10, 11, 12];
let initialCarts = [{ id: 0, name: '멋진', quan: 2 }, { id: 1, name: '신발', quan: 1 }];

function cartsReducer(state = initialCarts, action) {
  if (action.type === 'test') {
    let tmp = [...state];
    tmp[action.payload.id].quan++;
    return tmp;
  }
  return state;
}

function stocksReducer(state = initialStocks, action) {
  switch (action.type) {
    case 'stocks:update to newData':
      return action.newData;
    default:
      return state;
  }
}

function shoesReducer(state = initialShoes, action) {
  switch (action.type) {
    case 'shoes:update to newData':
      return action.newData;
    default:
      return state;
  }
}

let store = createStore(combineReducers({ cartsReducer, stocksReducer, shoesReducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
