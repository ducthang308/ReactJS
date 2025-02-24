import React from 'react'
import logo from "../assets/img/Logo.png";
import "./navbar.css";

const items = [
    { name: "About", link: "#"},
    { name: "Services", link: "#"},
    { name: "Products", link: "#"},
    { name: "List", link: "#"},
    { name: "Support", link: "#"},
  ];

const Navbar = () => {
  return (
    <div class="navbar">
        <div class="navbar-flex">
            <ul class="navbar-link">
                <li class="navbar-item">
                    <a href="" class="navbar-link-logo">
                        <img src={logo} alt="" class="navbar-logo"/>
                    </a>
                </li>
                {items.map((item, index) => (
                    <li key={index} class="navbar-item">
                        <a href={item.link} class="navbar-link">{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar