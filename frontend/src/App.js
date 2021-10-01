import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import Login from './pages/login/Login.jsx'
import Register from "./components/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
      <Route exact path="/">
         {user ? <Home /> : <Register />}
      </Route>
      <Route path="/profile/:username">
      <Profile />
      </Route>
      <Route path="/login">
      {user ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route path="/Register">
      {user ? <Redirect to="/" /> : <Register />}
      </Route>
     </Switch>
    </Router>
  );
}

export default App;
