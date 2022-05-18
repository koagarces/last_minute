import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import FeedPage from "./pages/feedPage";
import EventPage from "./pages/eventPage";
import UserProfile from "./pages/userProfile";
import CreateEventPage from "./pages/createEvent";
import { useState, useEffect } from "react";
import { CheckSession } from "./services/userServices";
import UpdatePage from "./pages/updatePage";
import Messages from "./components/messages";
import MatchesList from "./components/matchList";
import Chat from "./pages/chat";
import "./styles/app.css";
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
        <Route
          index
          element={<Home toggleAuthenticated={toggleAuthenticated} />}
        />
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
          path="/events"
          element={
            <FeedPage
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              user={user}
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
        <Route
          path={`/user/event/:id`}
          element={
            <UpdatePage
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              user={user}
            />
          }
        />
        <Route
          path={`/user/event/create`}
          element={
            <CreateEventPage
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              user={user}
            />
          }
        />
        <Route
          path={`/matches/:userId`}
          element={
            <Chat
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              user={user}
            />
          }
        />
        <Route
          path={`/messages/:matchId`}
          element={
            <Messages
              setUser={setUser}
              toggleAuthenticated={toggleAuthenticated}
              user={user}
            />
          }
        />
        <Route
          path={`/matches/:userId`}
          element={
            <MatchesList
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
