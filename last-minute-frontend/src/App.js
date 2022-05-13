import FeedPage from "./pages/feedPage";

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <FeedPage />
    </div>
  );
}

export default App;
