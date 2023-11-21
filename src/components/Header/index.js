import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="bg-container">
    <div className="content-card">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <h1 className="heading">Wave</h1>
      </div>
      <div className="list-items">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </li>
      </div>
    </div>
  </div>
)
export default Header
