import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkTo = styled(Link)`
  text-decoration: none;
  //   width: 100%;
`

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  padding: 8px;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#1e293b')};
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: #64748b;
  margin: 0;
  padding: 8px;
`
export const Image = styled.img`
  width: 350px;
  padding: 10px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`
