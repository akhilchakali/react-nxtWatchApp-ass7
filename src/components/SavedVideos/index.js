import {MdPlaylistAdd} from 'react-icons/md'
import AppContext from '../../Context/AppContext'
import {
  Container,
  VideoContainer,
  IconContainer,
  SavedVideoContainer,
  ListContainer,
  Image,
  Text,
  MainHeading,
} from './SavedVideosStyles'
import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'
import NavMenu from '../NavMenu'

const SavedVideos = () => (
  <AppContext.Consumer>
    {value => {
      const {darkTheme, savedVideosList} = value

      const renderTrendingVideos = () => {
        if (savedVideosList.length === 0) {
          return (
            <VideoContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="90vh"
              darkTheme={darkTheme}
            >
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <MainHeading darkTheme={darkTheme}>
                No saved videos found
              </MainHeading>
              <Text>Save your videos by clicking a button</Text>
            </VideoContainer>
          )
        }
        return (
          <ListContainer darkTheme={darkTheme}>
            {savedVideosList.map(eachVideo => (
              <TrendingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </ListContainer>
        )
      }

      const renderSavedVideoSection = () => (
        <VideoContainer
          flexDirection="column"
          height="90vh"
          data-testid="savedVideos"
          darkTheme={darkTheme}
        >
          <SavedVideoContainer
            darkTheme={darkTheme}
            justifyContent="flex-start"
            alignItems="center"
          >
            <IconContainer
              darkTheme={darkTheme}
              justifyContent="center"
              alignItems="center"
            >
              <MdPlaylistAdd />
            </IconContainer>
            <MainHeading darkTheme={darkTheme}>Saved Videos</MainHeading>
          </SavedVideoContainer>
          {renderTrendingVideos()}
        </VideoContainer>
      )
      return (
        <>
          <Header />
          <Container darkTheme={darkTheme} flexDirection="row" height="90vh">
            <div className="responsive-container">
              <NavMenu />
              {renderSavedVideoSection()}
            </div>
          </Container>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideos
