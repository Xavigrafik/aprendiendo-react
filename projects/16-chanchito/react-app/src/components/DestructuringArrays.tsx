import { ReactNode, useState, useEffect } from 'react';
import Spacer from './Spacer';
import Button from './Button';
import List2 from './List.2';

interface Props {
    children: ReactNode;
}


function DestructuringArrays(props: Props) {
    
    
    const getRandomNum = () => { return Math.random().toString().substring(2,8) }
    const getRandomString = () => { return Array(8).fill(undefined).map(_ => String.fromCharCode(48 + Math.random() * (127 - 48))).join('') }

    const getNewObject = () => {
        return {
            id: getRandomNum(),
            name: getRandomString() ,
        }
    }

    const initialProducts = [
        getNewObject() ,
        getNewObject() ,
    ];

    const [products, setProducts] = useState(initialProducts);

    // añade obj al inicio
    const comienzo = () => {
        const newProducts = [ getNewObject(), ...products];
        setProducts(newProducts)
    }
    
    // añade obj al final
    const final = () => {
        const newProducts = [...products, getNewObject()];
        setProducts(newProducts)
    }
    
    // elimina el ultimo
    const eliminar = () => {
        if (products.length != 0) {
            const newProducts = [...products.slice(0, -1)];
            setProducts(newProducts)
        }
    }
    
    // elimina todos
    const limpiar = () => {
        if (products.length != 0) {
            setProducts([])
        }
    }

    return <>
            <h4>{products.length}</h4>
            <Spacer space={30}></Spacer>
            <Button onClick={comienzo}>+ comienzo</Button>
            <Button onClick={final}>+ final</Button>
            <Button onClick={eliminar}>Eliminar último</Button>
            <Button onClick={limpiar}>Limpiar</Button>
            <Spacer space={30}></Spacer>
            { products && <List2 data={products} ></List2>}
        </>
}

export default DestructuringArrays;
