import { ReactNode } from "react";

type Person = {
        name: string;
    lastName: string;
       email: string;
        type: string;
    formState?: () => void; // opcional si no siempre se usa
};

type PeopleArray = {
    data: Person[];
};

function List3({ data }: PeopleArray) {

    if (data.length) {
        
        console.log("HEMOS ENTRADO EN LIST3", data);
        
        return (

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((el, i) => (
                                <tr key={i}>
                                    <td className="tableData" >
                                        {el.name}
                                    </td>
                                    <td className="tableData">
                                        {el.lastName}
                                    </td>
                                    <td className="tableData">
                                        {el.email}
                                    </td>
                                    <td className="tableData">
                                        {el.type}
                                        {el.type}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

        );
        
    } else {
        return (<p className="alert alert-primary">Añade algo desde el formulario</p>)
    }
}

 
export default List3;
