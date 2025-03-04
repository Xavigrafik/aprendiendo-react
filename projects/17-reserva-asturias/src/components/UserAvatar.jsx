import { useNavigate } from "react-router-dom"


function AvatarImg() { 
    return (
        <span className="avatar">
            <span className="img">
                <img src="/dog/50/50" className="img-fluid" />
            </span>
            <span>User name</span>
        </span>
    )
}


function UserAvatar({ userIsLogged, setUserIsLogged }) {

    const navigate = useNavigate();

    return (
            <div className="dropdown-center">
                <span className="dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                     {userIsLogged ? <AvatarImg></AvatarImg> : ""}
                </span>
                <ul className="dropdown-menu">
                    <li>
                        <span className="dropdown-item"
                            href="#"
                            onClick={() => {
                                setUserIsLogged(false);
                                navigate('/'); 
                            }} >
                            Log out
                        </span>
                    </li>
                </ul>
            </div>
    )
}

export default UserAvatar
