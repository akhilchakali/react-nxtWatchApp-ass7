import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaHotjar, FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'

import './index.css'
import AppContext from '../../Context/AppContext'

const navObject = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  saved: 'SAVED',
}

const navList = [
  {
    id: 'HOME',
    name: 'Home',
    link: '/',
  },
  {
    id: 'TRENDING',
    name: 'Trending',
    link: '/trending',
  },
  {
    id: 'GAMING',
    name: 'Gaming',
    link: '/gaming',
  },
  {
    id: 'SAVED',
    name: 'Saved Videos',
    link: '/saved-videos',
  },
]

const NavMenu = () => {
  const iconSwitch = (iconId, iconClassName) => {
    switch (iconId) {
      case navObject.home:
        return <AiFillHome className={iconClassName} />
      case navObject.trending:
        return <FaHotjar className={iconClassName} />
      case navObject.gaming:
        return <FaGamepad className={iconClassName} />
      case navObject.saved:
        return <MdPlaylistAdd className={iconClassName} />
      default:
        return null
    }
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme, navId, changeNav} = value
        const mainContainerClassName = 'home-nav-container'
        return (
          <div className={mainContainerClassName}>
            <ul>
              {navList.map(eachItem => {
                let navClassName = ''
                let headingClassName = ''
                let iconClassName = ''
                if (darkTheme) {
                  if (navId === eachItem.id) {
                    headingClassName = 'dark-heading active-dark-heading'
                    navClassName = 'nav-item dark-active-nav-item'
                    iconClassName = 'dark-nav-icon active-icon'
                  } else {
                    headingClassName = 'dark-heading'
                    navClassName = 'nav-item'
                    iconClassName = 'dark-nav-icon'
                  }
                } else if (navId === eachItem.id) {
                  headingClassName = 'nav-heading active-heading'
                  navClassName = 'nav-item active-nav'
                  iconClassName = 'nav-icon active-icon'
                } else {
                  headingClassName = 'nav-heading'
                  navClassName = 'nav-item'
                  iconClassName = 'nav-icon'
                }

                const onClickChangeNav = () => changeNav(eachItem.id)

                return (
                  <Link to={eachItem.link} key={eachItem.id} className="linker">
                    <li className={navClassName} onClick={onClickChangeNav}>
                      {iconSwitch(eachItem.id, iconClassName)}
                      <h1 className={headingClassName}>{eachItem.name}</h1>
                    </li>
                  </Link>
                )
              })}
            </ul>
            <div
              className={
                darkTheme ? 'contact-us-section dark-bg' : 'contact-us-section'
              }
            >
              <p className="contact-us-heading">CONTACT US</p>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="contact-icon"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="contact-icon"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  className="contact-icon"
                />
              </div>
              <p
                className={
                  darkTheme ? 'description' : 'description description-light'
                }
              >
                Enjoy! Now to see your channels and recommendations!
              </p>
            </div>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export default NavMenu
