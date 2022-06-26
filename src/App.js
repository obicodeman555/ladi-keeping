import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import BookablesPage from "./components/bookables/BookablesPage";
import BookingsPage from "./components/bookings/BookingsPage";
import UsersPage from "./components/users/UsersPage";
import UserPicker from "./components/users/UserPicker";
function App() {
  return (
    <Router>
      <div className="App container">
        <header className="header__ladi-keeping">
          <nav>
            <ul className="flex-container align-center">
              <li className="flex-container direction-column justify-center">
                <Link
                  to="/bookings"
                  className="btn btn-header flex-container align-center justify-center"
                >
                  <span className="flex-container align-center">
                    <FaCalendarAlt />
                  </span>
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/bookables"
                  className="btn btn-header flex-container align-center justify-center"
                >
                  <span className="flex-container align-center justify-center">
                    <FaDoorOpen />
                  </span>
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  className="btn btn-header flex-container align-center justify-center"
                >
                  <span className="flex-container align-center justify-center">
                    <FaUsers />
                  </span>
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>
          <UserPicker />
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookables" element={<BookablesPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
