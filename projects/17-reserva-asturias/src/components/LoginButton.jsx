import { NavLink } from 'react-router-dom'

function LoginButton({ setUserIsLogged }) {
    
    return (
        <>
            <div className="dropdown">
                <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to="/login"
                >
                    Log in
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                    <li>
                        <form className="px-4 py-2">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label" > Email </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label" >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1" >
                                    Check me out
                                </label>
                            </div>
                          
                            <button type="submit" onClick={()=>{setUserIsLogged(true)}} className="btn btn-outline-warning">
                                Submit
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LoginButton
