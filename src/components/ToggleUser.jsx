import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedIn";
import { Link, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUser";

const ToggleUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  const toggleLogout = () => {
    if (loggedIn) {
      setLoggedIn(false);
      setCurrentUser("");
    } else {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return (
      <Link>
        <button className="btn btn-light" onClick={toggleLogout}>
          Logout
        </button>
      </Link>
    );
  } else {
    return (
      <Link to="/login">
        <button className="btn btn-light" onClick={toggleLogout}>
          Login
        </button>
      </Link>
    );
  }
};

export default ToggleUser;
