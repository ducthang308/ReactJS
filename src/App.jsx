import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./HeaderComponent/Header";
import Navbar from "./NavbarComponent/Navbar";
import Content from "./ContentComponent/Content";
import "./base.css";
import "./responsive.css";

const App = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Content></Content>
    </>
  );
};

export default App;
