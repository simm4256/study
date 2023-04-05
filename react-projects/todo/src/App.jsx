import React, { lazy, Suspense, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MyNav from './components/MyNav.jsx'
import MainList from './components/MainList'

function App() {
  const [dataset, datasetChange] = useState([{
    id: 0,
    title: '제목',
    description: '설명',
    until: 3,
  }]);

  return (
    <div className="App">
      <MyNav />
      {dataset.map((value, id) => {
        return <MainList data={value} key={id}></MainList>
      })}
    </div>
  )
}

export default App
