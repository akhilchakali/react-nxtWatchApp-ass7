import {formatDistanceToNow} from 'date-fns'
import {
  LinkTo,
  ListItem,
  Image,
  Container,
  Heading,
  Text,
} from './TrendingVideoCardStyles'

import AppContext from '../../Context/AppContext'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    id,
    viewsCount,
    title,
    publishedAt,
    channel,
  } = videoDetails
  const {name} = channel
  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme} = value

        const getTime = () => {
          const formattedDate = formatDistanceToNow(new Date(publishedAt))

          return formattedDate
        }

        const date = getTime()

        return (
          <LinkTo to={`/videos/${id}`}>
            <ListItem darkTheme={darkTheme}>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <Container
                darkTheme={darkTheme}
                flexDirection="column"
                alignItems="flex-start"
              >
                <Heading darkTheme={darkTheme}>{title}</Heading>
                <Text darkTheme={darkTheme}>{name}</Text>
                <Text darkTheme={darkTheme}>
                  {viewsCount} . {date}
                </Text>
              </Container>
            </ListItem>
          </LinkTo>
        )
      }}
    </AppContext.Consumer>
  )
}

export default TrendingVideoCard
