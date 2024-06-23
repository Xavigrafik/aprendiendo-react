import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import  ListItems from './components/ListItems'
import NavBar from './components/NavBar';



function App() {

  return (
    <>
      <NavBar></NavBar>
      
      <div className='container'>
          <ListItems></ListItems>
      </div>
    </>
  )
}

export default App
