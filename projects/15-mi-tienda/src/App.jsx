import { useState } from "react";

// CONTEXT
import {CarritoContext} from './context/CarritoContext';

// ROUTES
import {BrowserRouter , Route, Routes} from "react-router-dom";

// COMPONENTS
import ListItems from './components/ListItems'
import ItemDetail from './components/ItemDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// PAGES
import  {NotFound}  from "./pages/NotFound";
import  {About}  from "./pages/About";
import  {Carrito}  from "./pages/Carrito";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';




function App() {
  
   const [carrito, setCarrito] = useState();
  
  const num = 8;

  return (
    <CarritoContext.Provider value={ {num ,carrito, setCarrito}}>
      <BrowserRouter>

          <NavBar></NavBar>

            <div className='container h-75' >
              <Routes>
                  <Route path="/" element={ <ListItems/> }/>
                  <Route path="/home" element={<ListItems />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/carrito" element={<Carrito />} />
            
                  <Route path="/categoria/*" element={<ListItems/>}/>
                  <Route path="/categoria/:cat" element={<ListItems />} />
            
                  <Route path="/item/*" element={<ItemDetail />} />
                  <Route path="/item/:id" element={<ItemDetail />} />

                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
            
              </Routes>
        </div>

          <Footer></Footer>
        </BrowserRouter>
      </CarritoContext.Provider>
  )
}

export default App
