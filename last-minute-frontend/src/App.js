import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import FeedPage from "./pages/feedPage";
import EventPage from "./pages/eventPage";
import UserProfile from "./pages/userProfile";
import { useState, useEffect } from "react";
import { CheckSession } from "./services/userServices";

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/sign-up"
          element={
            <SignUp
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
            />
          }
        />
        <Route
          path="/sign-in"
          element={
            <SignIn
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
            />
          }
        />
        <Route
          path="/feed"
          element={
            <FeedPage
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
            />
          }
        />
        <Route
          path={`/events/:id`}
          element={
            <EventPage
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              user={user}
            />
          }
        />
        <Route
          path={`/user/:userId`}
          element={
            <UserProfile
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              user={user}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
