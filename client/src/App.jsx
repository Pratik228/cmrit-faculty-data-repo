import { React, Fragment } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

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
