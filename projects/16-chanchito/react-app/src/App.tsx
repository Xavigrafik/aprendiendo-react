import './App.css';
import Card from './components/Card';
import Spacer from './components/Spacer';
import { CardBody } from './components/Card';
import List from './components/List';
import Button from './components/Button';
import { useEffect, useState } from 'react';


function App() {
    const initialList = ['Goku', 'Gohan', 'Radix'];

    // const handleSelect = (el:string) => {
    //     console.log('mostrando desde 1', el);
        
    // };
    const handleSelect2 = (el:string) => {
       // console.log('imprimiendo desde 2', el);
        
    };

    const [isLoading, setIsLoading] = useState(false);

    const [list, setList] = useState(initialList);

    const handleAdd = () => {
        setList([...list, "Minion"]  )
        setIsLoading(false);
    }
    const handleRemove = () => {
        setList(list.slice(0, -1))
    }

    // useEffect(() => {
    //     console.log('useEffect List');
        
    // }, [list])
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <Card><CardBody title="Hola" text="Text" /></Card> */}
                </div>
                <div className="col-12 my-3">
                    {/* <Spacer space={30} />
                    <List data={list}></List>
                    <Spacer space={30} />
                    <List data={list} onSelect={handleSelect}></List>
                    <Spacer space={'30px'} /> */}


                    <Button classProps="me-3" isLoading={isLoading} onClick={handleAdd}>Add Minion</Button>
                    <Button classProps="me-3" isLoading={isLoading} onClick={handleRemove}>Remove Minion</Button>

                </div>
                <div className="col-12">
                    <List data={list}></List>
                </div>
            </div>
        </div>
    );
}

export default App;
