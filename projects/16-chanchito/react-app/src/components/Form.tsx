import { FormEvent, useRef } from "react";
import { useForm } from "react-hook-form";

type Form = {
    name: string
    lastName: string,
    formState: () => void,
}

function Form() {

    
    const { register, handleSubmit, formState: { errors }, formState } = useForm<Form>();
    
    
    const onSubmit = (data: Form) => {
        
        console.log("formState: ",formState);
        console.log("errors: ",errors);
        console.log("data", data) 
        console.log("register",register) 
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
              <input
                  {...register('name', { minLength: {value:3, message: "Es mu corto!" } }) }
                  type="text" className="form-control" id="name" />
              
              { errors?.name && <p className="text-danger small">{errors?.name?.message}</p>}
              
        </div>
        <div className="mb-3">
            <label htmlFor="lastName" className="form-label">lastName</label>
                <input
                    {...register('lastName', { minLength: {value:3, message: "Es mu corto!" } }) }
                    type="text" className="form-control" id="lastName" />
                    { errors?.lastName && <p className="text-danger small">{errors?.lastName?.message}</p>}
        </div>
        
        
            <button type="submit" className="btn btn-primary" >Submit</button>
            
</form>
  )
}

export default Form