import { Link, Navigate, useSearchParams } from "react-router-dom";
import { useContext, useState } from "react";
import { checkValidUser, addUser } from "../utils/utils";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { LoggedInContext } from "../contexts/LoggedIn";

function SignUp() {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);



  
  return <h1>Signup page TBC</h1>;
}

export default SignUp;
