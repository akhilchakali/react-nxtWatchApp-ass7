import {formatDistanceToNow} from 'date-fns'
import {
  ListItem,
  VideoImage,
  DetailsContainer,
  Heading,
  Text,
  ChannelImg,
  LinkTo,
} from './videoLoaderStyles'
import AppContext from '../../Context/AppContext'

const VideoLoader = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    id,
    viewsCount,
    title,
    publishedAt,
    channel,
  } = videoDetails
  const {name, profileImageUrl} = channel

  const getTime = () => {
    const formattedDate = formatDistanceToNow(new Date(publishedAt))

    return formattedDate
  }

  const date = getTime()

  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <LinkTo to={`/videos/${id}`}>
            <ListItem darkTheme={darkTheme}>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer
                darkTheme={darkTheme}
                justifyContent="space-between"
              >
                <ChannelImg src={profileImageUrl} alt="channel logo" />
                <DetailsContainer
                  darkTheme={darkTheme}
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Heading darkTheme={darkTheme}>{title}</Heading>
                  <Text darkTheme={darkTheme}>{name}</Text>
                  <Text darkTheme={darkTheme}>
                    {viewsCount} . {date}
                  </Text>
                </DetailsContainer>
              </DetailsContainer>
            </ListItem>
          </LinkTo>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoLoader
