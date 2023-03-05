import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.darkTheme ? '#313131' : '#e2e8f0')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => (props.darkTheme ? 'bold' : '500')};
  color: ${props => {
    if (props.darkTheme) {
      return '#e2e8f0'
    }
    if (props.darkTheme && props.active) {
      return '#212121'
    }
    return '#606060'
  }};
`
