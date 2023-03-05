import Popup from 'reactjs-popup'

import styled from 'styled-components'

export const StyledPopup = styled(Popup)`
  &-content {
    width: 300px;
    background-color: ${props => (props.darkTheme ? '#313131 ' : '#f9f9f9')};
    text-align: center;
    border-radius: 8px;
    padding: 24px;
  }
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`

export const LogoutContainer = styled.div`
  width: 100%;
  font-family: 'Roboto';
`

export const LogDes = styled.p`
  color: ${props => (props.darkTheme ? '#ebebeb' : '#00306e')};
  font-size: 14px;
  font-weight: ${props => (props.darkTheme ? '400' : '500')};
  margin-bottom: 35px;
`

export const CancelBtn = styled.button`
  color: #94a3b8;
  background-color: transparent;
  font-size: 15px;
  width: 75px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid #94a3b8;
  margin: 0 24px 0 0;
  cursor: pointer;
`

export const ConfirmBtn = styled(CancelBtn)`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  margin: 0px;
  cursor: pointer;
`

export const LogoutBtn = styled.button`
  color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  font-size: 15px;
  width: 75px;
  height: 38px;
  border: 1px solid ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  border-radius: 8px;
  cursor: pointer;
`
