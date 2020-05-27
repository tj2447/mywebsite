import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/layout.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem`,
        textAlign: 'right', 
      }}
    >
      <nav style={{ 
        margin: 0 ,}}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: 40,
            textAlign: 'right',
            animationName: 'fadeinup',
          }}
        >
          home
        </Link>

        <Link
          to="/about"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: 40,
          }}
        >
          about
        </Link>
        <Link
          to="/resume"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: 40,
          }}
        >
          resume
        </Link>
        <Link
          to="/contact"
          style={{
            color: `black`,
            textDecoration: `none`,
            marginRight: 40,
          }}
        >
          where to find me
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
