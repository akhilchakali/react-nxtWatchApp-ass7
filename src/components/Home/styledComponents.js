import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
`
export const VideoContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
  width: 100%;
  overflow: auto;
`
export const SearchContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: ${props => props.height};
  width: 100%;
  padding-left: 20px;
  padding-top: 40px;
  //   margin-left: 30px;
`

export const ListContainer = styled.ul`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  //   height: ${props => props.height};
  padding-left: 0;
  width: 100%;
  padding-right: 0;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => (props.darkTheme ? 'bold' : '500')};
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#1e293b')};
`

export const SearchInputBar = styled.input`
  background-color: ${props => (props.darkTheme ? 'transparent' : '#ffffff')};
  color: #1e293b;
  font-family: 'Roboto';
  height: 32px;
  width: 380px;
  border-right: 1px solid ${props => (props.darkTheme ? '#181818' : '#cbd5e1')};
  padding: 15px;
  border: 1px solid #909090;
  outline: none;
  color: #94a3b8;
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
export const SearchButton = styled.button`
  color: #909090;
  background-color: ${props => (props.darkTheme ? '#313131' : '#f4f4f4')};
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #909090;
  height: 32px;
  width: 70px;
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
