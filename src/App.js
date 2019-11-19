import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Profile from "./Profile.js";
import Store from "./Store.js";
import Signin from "./Signin.js";
import { UserSession, AppConfig } from "blockstack";

// blockstack:

function App() {
  const appConfig = new AppConfig();
  const userSession = new UserSession({
    appConfig: appConfig,
    redirectPath: "http://localhost:3002"
  });

  console.log("userSession", userSession);
  console.log("isLoggedIn()", userSession.isUserSignedIn());

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(data => {
        window.history.replaceState({}, document.title, "/");
        setUserData(data);
      });
    }
  }, [userData]);

  const handleSignIn = e => {
    e.preventDefault();
    userSession.redirectToSignIn();
  };

  const handleSignOut = e => {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  };
  return (
      <Store>
    <div className="App">
      <div>Signed in: {userSession.isUserSignedIn().toString()}</div>
      {!userSession.isUserSignedIn() ? (
        <Signin userSession={userSession} handleSignIn={handleSignIn} />
      ) : (
        <>
          <Profile userSession={userSession} handleSignOut={handleSignOut} />
            <Dashboard />
        </>
      )}
    </div>
          </Store>
  );
}

export default App;
