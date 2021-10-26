import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import NavBarv2 from "./Components/NavBarv2";
import CategoryBar from "./Components/CategoryBar";
import { useState } from "react";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <NavBarv2
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Route
          path="/"
          render={() => <HomePage selectedCategory={selectedCategory} />}
          exact
        />
        <Route path="/cart" component={CartPage} exact />
        {/* <Route path="/Profile" component={ProfilePage} exact /> */}
        <Route />
      </div>
    </Router>
  );
}

export default App;
