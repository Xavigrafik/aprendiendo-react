import { useState } from "react";

import {CarritoContext} from './context/CarritoContext';

import {BrowserRouter , Route, Routes} from "react-router-dom";

import  ListItems from './components/ListItems'
import ItemDetail from './components/ItemDetail';
import NavBar from './components/NavBar';

import NotFound from "../pages/NotFound";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';


function App() {
  
   const [carrito, setCarrito] = useState();
  
  const num = 888;

  return (
    <CarritoContext.Provider value={ {num ,carrito, setCarrito}}>
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
      </CarritoContext.Provider>
  )
}

export default App
