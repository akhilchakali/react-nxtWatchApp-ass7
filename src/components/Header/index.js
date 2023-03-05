import './index.css'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {withRouter, Link} from 'react-router-dom'

import AppContext from '../../Context/AppContext'
import LogoutModal from '../LogoutModal'

const Header = () => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme, changeTheme} = value

      return (
        <div
          className={
            darkTheme ? 'header-container dark-bg' : 'header-container'
          }
        >
          <Link className="linker" to="/">
            <img
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
              className="nxtwatch-logo"
            />
          </Link>
          <div className="icons-container">
            <button
              type="button"
              className="theme-button"
              onClick={changeTheme}
              data-testid="theme"
            >
              {darkTheme ? (
                <FiSun className="theme-icon-dark" />
              ) : (
                <FaMoon className="theme-icon" />
              )}
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile-icon"
            />
            <LogoutModal darkTheme={darkTheme} />
          </div>
        </div>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Header)
