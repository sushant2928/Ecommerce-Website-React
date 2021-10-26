import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} exact />
        {/* <Route path="/Profile" component={ProfilePage} exact /> */}
        <Route />
      </div>
    </Router>
  );
}

export default App;
