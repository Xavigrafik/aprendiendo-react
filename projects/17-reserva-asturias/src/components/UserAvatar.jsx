import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function AvatarImg() { 
    const { user } = useContext(UserContext);
    return (
        <span className="avatar">
            <span className="img">
                <img src="/dog/50/50" className="img-fluid" />
            </span>
            <span>{user.name }</span>
        </span>
    )
}


function UserAvatar() {

    const { user, logOut } = useContext(UserContext);

    function handleClick(e) {
        e.preventDefault();
        console.log('logout');
        logOut();
    }
    return (
            <div className="dropdown-center">
                <span className="dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                     {user ? <AvatarImg></AvatarImg> : ""}
                </span>
                <ul className="dropdown-menu">
                    <li>
                        <button className="dropdown-item"
                            href="#"
                            onClick={(e) => { handleClick(e) }} >
                            Log out
                        </button>
                    </li>
                </ul>
            </div>
    )
}

export default UserAvatar
