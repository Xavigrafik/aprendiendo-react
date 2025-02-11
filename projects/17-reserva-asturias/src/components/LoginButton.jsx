import { NavLink } from 'react-router-dom';


function LoginButton() {
    return (
    <>  
        <NavLink className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/login">Log in</NavLink>
            <ul className="dropdown-menu">
                <li>    
                    
            <form className='p-5'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">ayudac?</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </li>
          </ul>

      </>
  )
}

export default LoginButton