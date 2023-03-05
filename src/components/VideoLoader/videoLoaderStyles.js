import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkTo = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  list-style: none;
  padding: 10px;
  width: 400px;
  height: 400px;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const VideoImage = styled.img`
  width: 100%;
  padding: 10px;
`
export const ChannelImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  padding: 10px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
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
