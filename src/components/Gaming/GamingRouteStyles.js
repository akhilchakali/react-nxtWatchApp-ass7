import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
`
export const GamingContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f1f1f1')};
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  color: #ff0000;
  padding: 30px;
`
export const VideoContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
  width: 100%;
  overflow: auto;
`
export const IconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  color: #ff0000;
  padding: 30px;
  border-radius: 50px;
  font-size: 34px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 34px;
  padding-left: 20px;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#1e293b')};
`
export const Text = styled.p`
  color: #64748b;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`
export const Image = styled.img`
  width: 300px;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  border: none;
  padding: 16px 40px;
`
export const ListContainer = styled.ul`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  //   height: ${props => props.height};
  padding-left: 0;
  width: 100%;
  padding-right: 0;
`
