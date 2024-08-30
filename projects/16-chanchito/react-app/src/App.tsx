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
import RadioGroup from './components/inputs/RadioGroup';
import CheckBox from './components/inputs/Checkbox';

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

    /////////////  CHECKBOXES  /////////////

    // Array con los nombres completos
    const checkboxNames = ["Checkbox 1", "Checkbox 2", "333"];

    // Generar el estado inicial dinámicamente
    const initialCheckboxesState = checkboxNames.reduce((acc, name) => {
        acc[name] = false;
        if (name === "333") {
          acc[name] = true; // Establece 333 como true al cargar la pag.
        }
    return acc;
    }, {} as { [key: string]: boolean });

    // Crear el estado en el componente
    const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>(initialCheckboxesState);
    

    // Maneja los cambios de cada checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckboxes({...checkboxes,[name]: checked,});
  };
    
    /////////////  RADIOS  /////////////
    
    const radioOptions = [
        { label: 'Opción 1', value: 'opcion1', disabled: false },
        { label: 'Opción 2', value: 'opcion2', disabled: false },
        { label: 'Opción 3', value: 'opcion3', disabled: false },
        { label: 'Opción 4', value: 'opcion4', disabled: true },
    ];
    
    const handleRadioChange = (selectedValue: string) => {
        console.log('handleRadioChange: ', selectedValue);
        
    }
      

    return (
        <div className="container">
            <div className="row py-5">

                <div className="col-12 col-md-auto p-3 mb-3">
                    <div className="cursor-pointer">cursor-pointer</div>
                    <div className="opacity-100">opacity-100</div>
                    <div className="opacity-75">opacity-75</div>
                    <div className="opacity-50">opacity-50</div>
                    <div className="opacity-25">opacity-25</div>
                    <div className="opacity-0">opacity-0</div>
                    <div className="opacity-100">opacity-100</div>
                </div>
                <div className="col-12 col-md-2 p-3 mb-3">
                    <div className="opacity-xxl-50">opacity-xxl-50</div>
                    <div className="opacity-xl-50">opacity-xl-50</div>
                    <div className="opacity-lg-50">opacity-lg-50</div>
                    <div className="opacity-md-25">opacity-md-25</div>
                    <div className="opacity-sm-25">opacity-md-25</div>
                </div>
                <div className="col-12 col-md p-3 mb-3">
                    <p className='bold'>Estos divs utilizan clases creadas con utility API:</p>
                    <div
                        className="
                        cursor-pointer
                        bold
                        bg-primary
                        p-2
                        mb-2
                        
                        opacity-25
                        opacity-md-50
                        opacity-xl-75
                        opacity-lg-75
                        opacity-xxl-100
                        ">
                        opacity-25 |
                        opacity-md-50 |
                        opacity-xl-75 |
                        opacity-lg-75 |
                        opacity-xxl-100
                    </div>
                    <p className='opacity-33'>opacity-33 clase creada</p>
                    <p className='opacity-66'>opacity-66 clase creada</p>
                    <div className="p-2 mb-2 text-tealVar bg-secondary">text-tealVar bg-secondary</div>
                    <div className="text-white p-2 mb-2 custom-tan">custom-tan</div>
                    <div className="text-white p-2 mb-2 custom-coral">custom-coral</div>
                    <div className="border p-2 mb-2 text-md-teal custom-tan custom-md-coral">text-md-teal custom-tan custom-md-coral</div>
                    <div className="border p-2 mb-2 text-warning text-md-teal-hover custom-tan custom-md-coral cursor-pointer">text-warning - text-md-teal-hover - custom-md-b - cursor-pointer</div>
                    <code className='d-block my-5'>projects/16-chanchito/react-app/src/styles/utils/custom-utilities.scss</code>
                </div>

                <div className="col-12 col-md-auto p-3 mb-3">

                <div className="p-3 rounded-2 mb-2" style={{ backgroundColor: 'var(--bs-warning-bg-subtle)' }}>bs-warning-bg-subtle</div>
                <div className="p-3 rounded-2 mb-2" style={{ backgroundColor: 'var(--bs-info-bg-subtle )' }}>bs-info-bg-subtle </div>
                <div className="p-3 rounded-2 mb-2" style={{ backgroundColor: 'var(--bs-light-rgb  )' }}>bs-light-rgb  </div>
                <div className="p-3 rounded-2 mb-2" style={{ backgroundColor: 'var(--bs-light-bg-subtle  )' }}>bs-light-bg-subtle  </div>
                <div className="p-3 rounded-2 mb-2" style={{ backgroundColor: 'var(--bs-light-border-subtle  )' }}>bs-light-border-subtle  </div>
                <div className="p-3 rounded-2 mb-2" style={{ backgroundColor: 'var(--bs-secondary-bg  )' }}>bs-secondary-bg  </div>
                <div className="p-3 rounded-2 mb-2" style={{ backgroundColor: 'var(--bs-dark-bg-subtle  )' }}>bs-dark-bg-subtle  </div>

                </div>

            </div>
            
            <div className="row">

                <div className="col-4">
                    
                    {checkboxNames.map(name => (
                        <CheckBox
                            key={name}
                            name={name}
                            checked={checkboxes[name]}
                            onChange={handleCheckboxChange}
                        />
                    ))}
                </div>
                <div className="col-4">
                    <RadioGroup
                        name="group1"
                        options={radioOptions} 
                        onChange={handleRadioChange}
                    ></RadioGroup>
                </div>
                
            </div>
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
