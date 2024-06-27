// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import  ListItems from './components/ListItems'
import NavBar from './components/NavBar';
import {BrowserRouter , Route, Routes} from "react-router-dom";
// import CardItem from './components/CardItem';
import ItemDetail from './components/ItemDetail';



function App() {

  return (
    <BrowserRouter>
        <NavBar></NavBar>

          <div className='container'>
            <Routes>
                <Route path="/" element={ <ListItems/> }/>
                <Route path="/home" element={<ListItems />} />
                <Route path="/item" element={<ListItems />} />
          
                <Route path="/categoria/all" element={<ListItems/>}/>
                <Route path="/categoria/:cat" element={<ListItems />} />
          
                <Route path="/item/:id" element={<ItemDetail />} />
          
            </Routes>
      </div>
      <hr />

        
       
      </BrowserRouter>
  )
}

export default App
