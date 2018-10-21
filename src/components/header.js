import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">
        <Link to="/">{siteTitle}</Link>
      </h3>
      <nav className="nav nav-masthead justify-content-center">
        <Link to="/page-2/" className="nav-link">
          Go to page 2
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
