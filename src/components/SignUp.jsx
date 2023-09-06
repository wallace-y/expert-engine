import { useContext, useState } from "react";
import { addUser } from "../utils/utils";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { LoggedInContext } from "../contexts/LoggedIn";

function SignUp() {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const [username, setUsername] = useState("");

  function handleSignup(event) {
    event.preventDefault();
    addUser(username).then((res) => {
      setLoggedIn(true);
      setCurrentUser(res.data.user);
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
            Welcome {username} <strong>the Marketplace</strong>
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

  return (
    <section className="text-center container mt-5">
      <form onSubmit={handleSignup}>
        <h1>Please Sign Up Below</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-group d-flex align-items-center mb-3">
              <label htmlFor="username" className="mx-2">
                Username:
              </label>
              <input
                required
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <button className="btn btn-dark ml-2" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
