import { useNavigate } from "react-router-dom"

function UserAvatar({ userIsLogged, setUserIsLogged }) {

    const navigate = useNavigate();

    return (
        <>
            <div class="dropdown">
                <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                     {userIsLogged ? "User avatar" : ""}
                </span>
                <ul class="dropdown-menu">
                    <li>
                        <a  class="dropdown-item"
                            href="#"
                            onClick={() => {
                                setUserIsLogged(false);
                                navigate('/'); 
                            }} >
                            Log out
                        </a>
                    </li>
                </ul>
                </div>
        </>
    )
}

export default UserAvatar
