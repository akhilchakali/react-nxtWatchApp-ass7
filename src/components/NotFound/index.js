import Header from '../Header'
import NavMenu from '../NavMenu'

import SavedContext from '../../Context/AppContext'

import {
  NotBgContainer,
  NotContainer,
  NotImg,
  NotHead,
  NotDes,
} from './StyledComponents'

const NotFound = () => (
  <SavedContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderNotFound = () => (
        <NotContainer>
          <NotImg
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <NotHead isDarkTheme={isDarkTheme}>Page Not Found</NotHead>
          <NotDes>
            We are sorry, the page you requested could not be found.
          </NotDes>
        </NotContainer>
      )

      return (
        <>
          <Header />
          <NotBgContainer isDarkTheme={isDarkTheme}>
            <NavMenu />
            {renderNotFound()}
          </NotBgContainer>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default NotFound
