import { ReactNode, useState } from 'react';

interface Props {
    children: ReactNode;
}
function DestructuringArrays(props: Props) {
    const initialProducts = [
        {
            id: 1,
            name: 'prod1',
        },
    ];

    const [products, setProducts] = useState(initialProducts);
    
    const handleClick = () => {
        console.log('antes Click:', initialProducts);
        
        //const prod2 = { id: 2, name: 'prod2' };
        

        // al final
        //const newProducts = [...products, prod2]

        // al principio
        //const newProducts = [prod2, ...products];

        
        // MODIFICAR UN PRODUCTO CONCRETO
        const newProducts = products.map(
            product => product.id == 1
                ? { ...product, name: "MINION" }
                : product
        )

       // setProducts(newProducts)
        console.log('despues Click: ',newProducts);
    };

    const { children } = props;

    return <div className='btn btn-primary' onClick={handleClick}>{children}</div>;
}

export default DestructuringArrays;
