import logo from './logo.svg';
import './App.css';
import data from './data';
import React, { useState, lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { connect, useDispatch, useSelector } from 'react-redux';

const Navbox = lazy(() => import('./components/Navbox'));
const Jumbobox = lazy(() => import('./components/Jumbobox'));
const Product = lazy(() => import('./components/Product'));
const Detail = lazy(() => import('./components/Detail'));
const Cart = lazy(() => import('./components/Cart'));

function App() {

  let shoes = useSelector((state) => (state.shoesReducer));
  let dispatch = useDispatch();

  let [loadingVisible, loadingVisibleChanger] = useState(false);

  return (
    <div className='App'>
      <Suspense fallback={<div>loading...</div>}>
        <Navbox></Navbox>
      </Suspense>

      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<div>loading...</div>}>
            <Jumbobox></Jumbobox>
          </Suspense>
          <div className="row">
            {shoes.map((shoe, i) => {
              return (
                <Suspense fallback={<div>loading...</div>}>
                  <Product shoe={shoe} i={i} key={i}></Product>
                </Suspense>
              )
            })}
          </div>
          <br />
          {loadingVisible ? <p>로딩 중...</p> : null}
          <Button variant="outline-dark" onClick={() => {
            loadingVisibleChanger(true);
            setTimeout(() => {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((data) => {
                let tmp = [...shoes, ...data.data];
                dispatch({ type: 'shoes:update to newData', newData: tmp });
                loadingVisibleChanger(false);
                console.log(tmp);
                console.log(shoes);
              }).catch((e) => {
                console.log(e);
              });
            }, 500);

          }}>더보기</Button>
        </Route>

        <Route path='/detail/:id'>
          <Suspense fallback={<div>loading...</div>}>
            <Detail></Detail>
          </Suspense>
        </Route>

        <Route path='/cart'>
          <Suspense fallback={<div>loading...</div>}>
            <Cart></Cart>
          </Suspense>
        </Route>
      </Switch>

    </div >
  );
}

export default App;
