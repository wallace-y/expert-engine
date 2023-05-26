import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useContext, useState } from "react";
import { checkValidUser } from "../utils/utils";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { LoggedInContext } from "../contexts/LoggedIn";

function Login() {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [username, setUsername] = useState("");

  const [validUser, setValidUser] = useState(true);

  function handleLogin(event) {
    event.preventDefault();
    checkValidUser(username)
      .then((res) => {
        if (res !== undefined) {
          setValidUser(true);
          setLoggedIn(true);
          setCurrentUser(res);
          return <Navigate to="/"/>
        } else {
          setValidUser(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (loggedIn) {
    return <h1>Welcome {currentUser.username}</h1>;
  }
  if (!validUser) {
    return (
      <section>
        <form onSubmit={handleLogin}>
          <h1>Invalid username. Please sign-up or try again</h1>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }

  return (
    <section>
      <form onSubmit={handleLogin}>
        <h1>Please login below</h1>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
