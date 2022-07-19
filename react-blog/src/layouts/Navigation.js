import React from "react"
import "../styles/Navigation.css"
import { NavLink } from "react-router-dom"

const navigation = [
  { name: "Start", path: "/", exact: true },
  { name: "Produkty", path: "/products" },
  { name: "Kontakt", path: "/contact" },
  { name: "Panel Administratora", path: "/admin" },
]

const Navigation = () => {
  const menu = navigation.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ))

  return (
    <nav className="mainNav">
      <ul>{menu}</ul>
    </nav>
  )
}

export default Navigation
