import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import NavBarv2 from "./Components/NavBarv2";
import Authentication from "./Pages/Authentication";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./Redux/userSlice";
import { useDispatch } from "react-redux";
import ProfilePage from "./Pages/ProfilePage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function App() {
  const STRIPE_PUBLIC_KEY = "pk_test_fB3yEouOM4K1CJfj1HGRCqil00DdkiLl0b";
  const promise = loadStripe(STRIPE_PUBLIC_KEY);
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
      // console.log(getAuth());
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
        <Route path="/cart" exact>
          <Elements stripe={promise}>
            <CartPage />
          </Elements>
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route />
      </div>
    </Router>
  );
}

export default App;
