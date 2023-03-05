import AppContext from '../../Context/AppContext'
import {LinkTo, ListItem, Heading, Text, Image} from './GamingVideoCardStyles'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {title, viewsCount, id, thumbnailUrl} = videoDetails
  return (
    <AppContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <LinkTo to={`videos/${id}`}>
            <ListItem darkTheme={darkTheme}>
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <Heading darkTheme={darkTheme}>{title}</Heading>
              <Text darkTheme={darkTheme}>{viewsCount} Watching Worldwide</Text>
            </ListItem>
          </LinkTo>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GamingVideoCard
