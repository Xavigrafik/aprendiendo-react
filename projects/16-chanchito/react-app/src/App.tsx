import './App.css';

//import Card from './components/Card';
//import { CardBody } from './components/Card';
import Spacer from './components/Spacer';
import List from './components/List';
import Button from './components/Button';
import Close from "./components/Alert/Close";
import Alert from './components/Alert';
import DestructuringArrays from './components/DestructuringArrays';

import {  useState } from 'react';
import Form from './components/Form';

function App() {
    
    const initialList = ['Goku', 'Gohan'];

    const [list, setList] = useState(initialList);
    const [isLoading, setIsLoading] = useState(false);
    //const [status, setStatus] = useState(true);
    const [sent, setSent] = useState(false);


    const handleSelect = (el:string) => {
        console.log('mostrando desde 1', el);
    };
    const handleSelect2 = (el:string) => {
       console.log('imprimiendo desde 2', el);
    };
    const handleAdd = () => {
        setList([...list, "Minion"]  )
        setIsLoading(true);
    }
    const handleRemove = () => {
        setIsLoading(true);
        setList(list.slice(0, -1))
    }
    const handleSend = () => {
       setSent(true)
    };
    
    

    const handleReset = () => {
        setList(initialList)
        setIsLoading(false);
        setSent(false)
    }


    return (
        <div className="container">
            <div className="row py-5">
                <Form></Form>
            </div>
                
            <div className="row">
                <div className="col-12 my-3">

                    {/* <Card><CardBody title="Hola" text="Text" /></Card> */}

                    <div className="row">
                        <div className="col-4">
                            <h5>List 1</h5>
                            <List data={list} onSelect={handleSelect}></List>
                        </div>
                        <div className="col-4">
                            <h5>List 2</h5>
                            <List data={list} onSelect={handleSelect2}></List>
                        </div>
                        <div className="col-4">
                            <div className='bg-primary border p-3 text-white'>
                                Close btn:
                                <Close></Close>
                                <Close white = {true}></Close>
                            </div>
                                
                            <Alert>Este párrafo es "children" de Alert y recibe los estilos de ./Alert.module.scss</Alert>
                            <Alert>"dismisable=false"</Alert>
                            <Alert dismisable={true}>"dismisable=true"</Alert>
                        </div>
                    </div>
                    
                    <Spacer space={'30px'} />

                    


                    <div className="row">
                        
                        <div className="col-4">

                            <Button classProps="me-3" onClick={handleAdd}>+</Button>
                            <Button classProps="me-3" onClick={handleRemove}>-</Button>
                            <div className="clearfix"></div>

                            <Button classProps="me-3" isLoading={isLoading} onClick={handleAdd}>+ Loading</Button>
                            <Button classProps="me-3" isLoading={isLoading} onClick={handleRemove}>- Loading</Button>
                            <div className="clearfix"></div>

                            <Button classProps="me-3" sent={sent} onClick={handleSend}>Send</Button>

                            <div className="clearfix"></div>

                            <Button classProps="me-3 btn-danger" onClick={handleReset}>Reset</Button>
                        </div>

                        <div className="col-4">
                            <div>Todos los botones son el mismo componente: <code>&lt;Button&gt;XXX&lt;/Button&gt;</code>
                            <br />La prop <code>isLoading</code> y la prop <code>sent</code> junto con las funciones  <code>handleAdd</code>, <code>handleRemove</code>, <code>handleSend</code> ejecutan las distintas funcionalidades
                            </div>
                        </div>

                    </div>
                   

                    
                    <Spacer space={'30px'} />

                    <div className="col-12">
                        <DestructuringArrays></DestructuringArrays>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default App;
