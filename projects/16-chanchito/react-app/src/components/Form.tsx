import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import List3 from "./List.3";
import Select from "./inputs/Select";

type Person = {
    name: string;
    lastName: string;
    email: string;
    type: string;
    formState?: () => void; // opcional si no siempre se usa
};


function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<Person>(); // Tipado corregido aquí
    const [data, setData] = useState<Person[]>([]);

    const onSubmit = (formData: Person) => {
        console.log("formData", formData);
        console.log("data", data);

        const newDataItem: Person = {
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            type: formData.type,
            formState: () => {
                // Define una función vacía o alguna lógica para formState
            },
        };

        const newData = [...data, newDataItem];
        setData(newData);
    };

    return (
        <>
            <div className="col-6">
                <form onSubmit={handleSubmit(onSubmit)} className="my-3 bg-light p-3 border">
                    <div className="row">
                        <div className="col-6 mb-3">
                            <input
                                {...register('name', { required: "Name is required", minLength: { value: 3, message: "Name is too short!" } })}
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="name"
                            />
                            {errors.name && <p className="text-danger small">{errors.name.message}</p>}
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                {...register('lastName', { required: "Last Name is required", minLength: { value: 3, message: "Last Name is too short!" } })}
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="lastName"
                            />
                            {errors.lastName && <p className="text-danger small">{errors.lastName.message}</p>}
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                {...register('email', { required: "Email is required",  minLength: { value: 3, message: "Email is too short!" } })}
                                type="email" // Tipo email para mejor validación en el navegador
                                className="form-control"
                                id="email"
                                placeholder="email"
                            />
                            {errors.email && <p className="text-danger small">{errors.email.message}</p>}
                        </div>
                        <div className="col-6 mb-3">
                            <input
                                {...register('type', { required: "Type is required" })}
                                type="text"
                                className="form-control"
                                id="type"
                                placeholder="type"
                            />
                            {errors.type && <p className="text-danger small">{errors.type.message}</p>}
                        </div>

                        <div className="col-6 mb-3">
                            <Select />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>

            <div className="col-6">
                {data.length > 0 && <List3 data={data} />}
            </div>
        </>
    );
}

export default Form;