import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Doctors from "./components/Doctors/Doctors";
import Login from "./components/Login/Login/Login";
import Contact from "./components/Contact/Contact";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Register from "./components/Login/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import Appoinment from "./components/Doctors/Appoinment";
import Products from "./components/Products/Products"


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/doctors">
            <Doctors/>
          </Route>
          <Route exact path="/products">
            <Products/>
          </Route>
          <PrivateRoute exact path="/doctor/:id">
            <Appoinment></Appoinment>
          </PrivateRoute>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
