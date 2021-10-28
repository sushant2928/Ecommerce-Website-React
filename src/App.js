import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import NavBarv2 from "./Components/NavBarv2";
import Authentication from "./Pages/Authentication";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./Redux/userSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      const { displayName, email } = user;
      dispatch(addUser({ displayName, email }));

      // ...
    } else {
      dispatch(removeUser());

      // User is signed out
      // ...
    }
  });

  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <NavBarv2 />

        <Route path="/" render={() => <HomePage />} exact />
        <Route path="/authentication" render={() => <Authentication />} exact />
        <Route path="/cart" component={CartPage} exact />
        {/* <Route path="/Profile" component={ProfilePage} exact /> */}
        <Route />
      </div>
    </Router>
  );
}

export default App;
