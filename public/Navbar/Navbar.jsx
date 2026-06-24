import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/shop_all',   label: 'Shop All' },
  { to: '/categories', label: 'Categories' },
  { to: '/about',      label: 'About Us' },
  { to: '/contact_us', label: 'Contact Us' },
]

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md sticky-top my-navbar">

      <NavLink to="/" className="navbar-brand my-logo">LUMINA</NavLink>

      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainMenu"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="mainMenu">
        <ul className="navbar-nav gap-4">
          {links.map(({ to, label }) => (
            <li key={to} className="nav-item">
              <NavLink to={to} className={({ isActive }) => `my-link ${isActive ? 'my-link--active' : ''}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-icons">
        <button className="icon-btn" aria-label="Search">
          <i className="ti ti-search" />
        </button>
        <button className="icon-btn" aria-label="Account">
          <i className="ti ti-user" />
        </button>
        <button className="icon-btn" aria-label="Cart">
          <i className="ti ti-shopping-bag" />
          <span className="cart-dot" />
        </button>
      </div>

    </nav>
  )
}