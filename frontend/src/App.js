import { React, useState } from "react";
import { Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddReview from "./components/add-review";
import Login from "./components/login";
import Restaurant from "./components/restaurant";
import RestaurantsList from "./components/restaurants-list";

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Restaurant Reviews
        </a>
        <div className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to={Restaurant} className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              <a onClick={logout} className="nav-link">
                Logout {user.name}
              </a>
            ) : (
              <Link to={Login} className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className="conatiner mt-3">
        <Router>
          <Route path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route
            path="/restaurants/:id/review"
            render={(props) => <AddReview {...props} user={user} />}
          />
          <Route
            path="/restaurants/:id"
            render={(props) => <Restaurant {...props} user={user} />}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} login={login} />}
          />
        </Router>
      </div>
    </>
  );
}

export default App;
