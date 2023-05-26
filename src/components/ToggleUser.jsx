import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedIn";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUser";

const ToggleUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  const toggleLogout = () => {
    if (currentUser) {
      setLoggedIn(false);
      setCurrentUser();
    }

    console.log("Toggled");
  };

  if (loggedIn) {
    return (
      <Link>
        <button onClick={toggleLogout}>Logout</button>
      </Link>
    );
  } else {
    return (
      <Link to="/login">
        <button onClick={toggleLogout}>Login</button>
      </Link>
    );
  }
};

export default ToggleUser;
