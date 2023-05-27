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
      // setLoggedIn(true);
      <Navigate to="/login" />;
    }
  };

  if (loggedIn) {
    return (
      <div className="ml-auto">
        <Link className="">
          <button className="btn btn-light" onClick={toggleLogout}>
            Logout
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="ml-auto">
        <Link to="/login">
          <button className="btn btn-light" onClick={toggleLogout}>
            Login
          </button>
        </Link>
      </div>
    );
  }
};

export default ToggleUser;
