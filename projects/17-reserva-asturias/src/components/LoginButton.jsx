import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function LoginButton() {

    const { logIn, usersList } = useContext(UserContext);

    function handleLogin(userId) {
        logIn(userId);
    }

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
                    <span className="material-symbols-sharp"> person </span>
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" >
                    <li>
                        <form id="loginForm" className="px-4 py-2">
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

                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </form>
                    </li>

                    <hr />
                    <div className='px-4 py-2'>
                        <p>Selecciona un usuario ficticio:</p>
                        <ul className="usersList">
                            {usersList && usersList.map((user) => (
                                <li key={user.id}>
                                    <a href="#" onClick={() => handleLogin(user.id)}>
                                        {user.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </ul>
            </div>
        </>
    )
}

export default LoginButton
