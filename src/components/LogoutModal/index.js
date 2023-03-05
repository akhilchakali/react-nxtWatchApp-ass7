import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import AppContext from '../../Context/AppContext'

import {
  StyledPopup,
  LogoutContainer,
  LogDes,
  CancelBtn,
  ConfirmBtn,
  LogoutBtn,
} from './styledComponents'

const LogoutPopup = props => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme} = value
      const onClickConfirmLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <StyledPopup
          modal
          darkTheme={darkTheme}
          trigger={<LogoutBtn darkTheme={darkTheme}>Logout</LogoutBtn>}
        >
          {close => (
            <LogoutContainer darkTheme={darkTheme}>
              <LogDes darkTheme={darkTheme}>
                Are you sure, you want to logout
              </LogDes>
              <CancelBtn type="button" onClick={close}>
                Cancel
              </CancelBtn>
              <ConfirmBtn type="button" onClick={onClickConfirmLogout}>
                Confirm
              </ConfirmBtn>
            </LogoutContainer>
          )}
        </StyledPopup>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(LogoutPopup)
