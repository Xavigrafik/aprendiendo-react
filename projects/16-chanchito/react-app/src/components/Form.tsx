import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import List3 from "./List.3";
import Select from "./inputs/Select";


function Form() {

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

    const { register, handleSubmit, formState: { errors }, formState } = useForm<PeopleArray>();
    
    const [data, setData] = useState<Person[]>([]);
    
    
    const onSubmit = (formData: Person) => {
        
        console.log("formState: ",formState);
        //console.log("errors: ",errors);
        console.log("formData", formData) 
        console.log("data", data) 
        //console.log("register", register)


         // Crea el nuevo objeto a añadir
            const newDataItem: Person  = {
                name: formData.name,
                lastName: formData.lastName,
                email: formData.email,
                type:  formData.type,
                formState: () => {
                    // Define una función vacía o alguna lógica para formState
                },
            };

            // Crea un nuevo array con los datos actuales y el nuevo elemento
            const newData = [...data, newDataItem];

            // Actualiza el estado con el nuevo array
            setData(newData);
    }
    
    return (
        <>
            
            <div className="col-6">
                <form onSubmit={handleSubmit(onSubmit)} className=" my-3 bg-light p-3 border">
                    <div className="row">
                        <div className="col-6 mb-3">
                            <input
                                {...register('name', { minLength: {value:3, message: "Es mu corto!" } }) }
                                type="text" className="form-control" id="name" value="PEPE" />
                            
                            { errors?.name && <p className="text-danger small">{errors?.name?.message}</p>}
                            
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                {...register('lastName', { minLength: {value:3, message: "Es mu corto!" } }) }
                                type="text" className="form-control" id="lastName" value="ALIMAÑA"/>
                                { errors?.lastName && <p className="text-danger small">{errors?.lastName?.message}</p>}
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                {...register('email', { minLength: {value:3, message: "Es mu corto!" } }) }
                                type="text" className="form-control" id="email" value="pepe@tuputamadre.com" />
                                { errors?.email && <p className="text-danger small">{errors?.email?.message}</p>}
                        </div>
                        <div className="col-6 mb-3">
                        <input
                            {...register('type') }
                            type="text" className="form-control" id="type" value="XX" />
                        </div>

                        <div className="col-6 mb-3">
                            <Select></Select>
                        </div>
                
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                    </form>
            </div>

            <div className="col-6">
                {data && <List3 data={data} ></List3>}
            </div>
    </>
  )
}

export default Form