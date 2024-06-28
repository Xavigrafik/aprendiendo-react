// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import  ListItems from './components/ListItems'

import NavBar from './components/NavBar';
import NotFound from "../pages/NotFound";

import {BrowserRouter , Route, Routes} from "react-router-dom";

import ItemDetail from './components/ItemDetail';



function App() {

  return (
    <BrowserRouter>

        <NavBar></NavBar>

          <div className='container'>
            <Routes>
                <Route path="/" element={ <ListItems/> }/>
                <Route path="/home" element={<ListItems />} />
          
                <Route path="/categoria/*" element={<ListItems/>}/>
                <Route path="/categoria/:cat" element={<ListItems />} />
          
                <Route path="/item/*" element={<ItemDetail />} />
                <Route path="/item/:id" element={<ItemDetail />} />

                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
          
            </Routes>
      </div>
      <hr />

        
       
      </BrowserRouter>
  )
}

export default App
