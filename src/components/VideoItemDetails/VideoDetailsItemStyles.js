import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const Container = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#fffffff')};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
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

export const DetailsContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
  width: 70%;
  padding: 0 30px;
  //   overflow: auto;
`

export const ButtonsContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
  //   width: 70%;
  //   overflow: auto;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 34px;
  padding-left: 20px;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#1e293b')};
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  padding-left: 30px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#1e293b')};
`
export const Text = styled.p`
  color: #64748b;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`

export const TextDescription = styled.p`
  color: #64748b;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
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
  display: flex;
  align-items: center;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const Span = styled.span`
  font-family: 'Roboto';
  padding-left: 8px;
  font-size: 16px;
`
export const DisLikeButton = styled.button`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  color: ${props => (props.likeStatus === 'DISLIKE' ? '#2563eb  ' : '#64748b')};
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  border: none;
  margin: 0 10px;
`
export const LikeButton = styled.button`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  color: ${props => (props.likeStatus === 'LIKE' ? '#2563eb  ' : '#64748b')};
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  border: none;
  margin: 0 10px;
`
export const ActionButton = styled.button`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  color: ${props => (props.isSaved ? '#2563eb  ' : '#64748b')};
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  border: none;
  margin: 0 10px;
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
export const HorizontalLine = styled.hr`
  background-color: #d7dfe9;
  border: 1px solid #d7dfe9;
  width: 100%;
  margin: 18px 0;
`
export const ReactPlayerE = styled(ReactPlayer)`
  //   margin-bottom: 25px;
  padding: 30px;
`
export const ChannelContainer = styled.div`
  display: flex;
`

export const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;
  margin-left: 30px;
`

export const ChannelNameContainer = styled.div``

export const ChannelName = styled.p`
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  font-size: 20px;
  font-weight: ${props => (props.darkTheme ? '400' : '500')};
  padding-left: 8px;
`

export const ChannelSubscribers = styled.p`
  color: #616e7c;
  font-size: 14px;
  font-weight: 500;
  padding-left: 8px;
`

export const ChannelDescription = styled.p`
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#475569')};
  font-size: 16px;
  padding-left: 8px;
  font-weight: ${props => (props.darkTheme ? '300' : '400')};
  font-family: 'Roboto';
`
