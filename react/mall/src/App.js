import logo from './logo.svg';
import './App.css';
import data from './data';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbox from './components/Navbox';
import Jumbobox from './components/Jumbobox';
import Product from './components/Product';
import Detail from './components/Detail';
import axios from 'axios';

function App() {
  let [shoes, shoesChanger] = useState(data);
  let [loadingVisible, loadingVisibleChanger] = useState(false);
  let [stocks, stocksChanger] = useState([10, 11, 12]);

  return (
    <div className='App'>
      <Navbox></Navbox>

      <Switch>
        <Route exact path='/'>
          <Jumbobox></Jumbobox>
          <div className="row">
            {shoes.map((shoe, i) => {
              return (
                <Product shoe={shoe} i={i} key={i}></Product>
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
                shoesChanger(tmp);
                loadingVisibleChanger(false);
              }).catch((e) => {
                console.log(e);
              });
              console.log(shoes);
            }, 1000);

          }}>더보기</Button>
        </Route>

        <Route path='/detail/:id'>
          <Detail shoes={shoes} stocks={stocks} stocksChanger={stocksChanger}></Detail>
        </Route>
      </Switch>

    </div >
  );
}

export default App;
