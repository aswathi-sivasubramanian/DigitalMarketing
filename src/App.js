import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <Link to="start" className="navbar-logo">
            Ad-One
          </Link>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="start" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/search" className="navbar-link">
                Search Bloggers
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/review" className="navbar-link">
                Review
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="login" className="navbar-link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
// // import logo from "./logo.svg";
// import { Link, Outlet } from "react-router-dom";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Link to="/">Home</Link>
//       <Link to="about">About</Link>
//       <Link to="search">Search Bloggers</Link>
//       <Link to="review">Review</Link>
//       <Link to=""> </Link>
//       <h1>Hi</h1>
//       <Outlet />
//     </div>
//   );
// }

// export default App;
