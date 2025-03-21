import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function AvatarImg() {
    const { user } = useContext(UserContext);
    return (
        <span className="avatar">
            <span className="img">
                <img src="/dog/50/50" className="img-fluid" alt="Avatar" />
            </span>
            <span>{user.name}</span>
        </span>
    );
}



function UserAvatar() {
    const { user, logOut } = useContext(UserContext);

    function handleLogOut(e) {
        e.preventDefault();
        logOut();
    }

    return (
        <div className="dropdown-center">
            <span className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {user && <AvatarImg />}
            </span>
            <ul className="dropdown-menu">
                <li>
                    <button className="dropdown-item" onClick={handleLogOut}>
                        Log out
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default UserAvatar;