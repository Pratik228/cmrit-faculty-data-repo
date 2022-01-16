import { React, Fragment } from "react";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import NavBar from "./components/Layout/Navbar.jsx";
import Home from "./components/Layout/Home.jsx";
import "./styles/App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
