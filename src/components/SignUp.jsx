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
    return <h1 className="text-center mt-5">Welcome {currentUser.username}</h1>;
  }

  return (
    <section className="text-center container mt-5">
      <form onSubmit={handleSignup}>
        <h1>Please Sign Up Below</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-group d-flex align-items-center">
              <label htmlFor="username" className="mr-2">
                Username:
              </label>
              <input
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <button className="btn btn-dark ml-2" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
