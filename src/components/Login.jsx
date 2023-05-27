import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useContext, useState } from "react";
import { checkValidUser, addUser } from "../utils/utils";
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
          return <Navigate to="/" />;
        } else {
          setValidUser(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSignUp(event) {
    event.preventDefault();
    addUser(username);
  }

  if (loggedIn) {
    return <h1 className="text-center">Welcome {currentUser.username}</h1>;
  }
  if (!validUser) {
    return (
      <section className="text-center">
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
    <section className="text-center container">
      <form onSubmit={handleLogin}>
        <h1>Please login below</h1>
      
        <label htmlFor="username">Username:</label>
        <input
          className="form-control"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button className="btn btn-dark" type="submit">Login</button>
      </form>
      <form onSubmit={handleLogin}>
        <h1 className="mt-2">
          Not a user? Sign up{" "}
          <Link to="/signup" className="link-dark">
            here
          </Link>
        </h1>
      </form>
    </section>
  );
}

export default Login;
