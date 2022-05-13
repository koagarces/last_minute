import FeedPage from "./pages/feedPage";
import { Routes, Route } from "react-router-dom";


function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
  <div className="App">
    <Routes>
      <Route index element={}
    </Routes>
  </div>
  )
}

export default App;
