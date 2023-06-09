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

  if (loggedIn) {
    return (
      <section>
        <div class="px-4 py-5 my-5 text-center">
          <p>
            <i class="fa-regular fa-trash-can fa-2xl"></i>
          </p>
          <h1 class="display-5 fw-bold text-body-emphasis">
            Welcome {currentUser.username}
          </h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">What would you like to do today?</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/items" className="link-dark">
                I'm here to buy
              </Link>
              <Link to="/sellItems" className="link-dark">
                I'm here to sell
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (!validUser) {
    return (
      <section className="text-center mt-5">
        <form onSubmit={handleLogin}>
          <h1>Invalid username. Please sign-up or try again</h1>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="form-group d-flex align-items-center mb-3">
                <label className="mx-2" htmlFor="username">
                  Username:
                </label>
                <input
                  className="form-control"
                  required
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <button className="btn btn-dark ml-2" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }

  return (
    <section className="text-center container mt-5">
      <form onSubmit={handleLogin}>
        <h1>Please login below</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-group d-flex align-items-center mb-3">
              <label htmlFor="username" className="mx-2">
                Username:
              </label>
              <input
                required
                className="form-control "
                id="username"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <button className="btn btn-dark ml-2" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
      <form onSubmit={handleLogin}>
        <h3 className="mt-5">
          <Link to="/signup" className="link-dark">
            Not a user? Sign up here
          </Link>
        </h3>
      </form>
    </section>
  );
}

export default Login;
