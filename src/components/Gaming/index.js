import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import AppContext from '../../Context/AppContext'
import Header from '../Header/index'
import NavMenu from '../NavMenu'
import {
  Container,
  VideoContainer,
  Heading,
  IconContainer,
  GamingContainer,
  Text,
  Image,
  Button,
  ListContainer,
} from './GamingRouteStyles'
import GamingVideoCard from '../GamingVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(dataItem => ({
        id: dataItem.id,
        title: dataItem.title,
        viewsCount: dataItem.view_count,
        thumbnailUrl: dataItem.thumbnail_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickSearch = () => {
    this.setState(
      {apiStatus: apiStatusConstants.inProgress},
      this.getGamingVideosData,
    )
  }

  render() {
    const {apiStatus, videosList} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {darkTheme} = value

          const renderSuccessView = () => (
            <>
              <ListContainer darkTheme={darkTheme}>
                {videosList.map(eachItem => (
                  <GamingVideoCard key={eachItem.id} videoDetails={eachItem} />
                ))}
              </ListContainer>
            </>
          )

          const renderFailureView = () => (
            <VideoContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="90vh"
            >
              <Image
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <Heading>Oops! Something Went Wrong</Heading>
              <Text>
                We are having some trouble to complete your request. Please try
                again.
              </Text>
              <Button type="button" onClick={this.onClickSearch}>
                Retry
              </Button>
            </VideoContainer>
          )

          const renderLoadingView = () => (
            <VideoContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="90vh"
              data-testid="loader"
              darkTheme={darkTheme}
            >
              <Loader
                type="ThreeDots"
                color={darkTheme ? '#ffffff' : '#3b82f6'}
                width="50"
                height="50"
                data-testid="loader"
              />
            </VideoContainer>
          )

          const renderGamingVideos = () => {
            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderSuccessView()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.inProgress:
                return renderLoadingView()
              default:
                return null
            }
          }

          const renderGamingSection = () => (
            <VideoContainer
              flexDirection="column"
              height="90vh"
              data-testid="gaming"
              darkTheme={darkTheme}
            >
              <GamingContainer
                darkTheme={darkTheme}
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconContainer
                  darkTheme={darkTheme}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FaGamepad />
                </IconContainer>
                <Heading darkTheme={darkTheme}>Gaming</Heading>
              </GamingContainer>
              {renderGamingVideos()}
            </VideoContainer>
          )

          return (
            <>
              <Header />
              <Container
                darkTheme={darkTheme}
                flexDirection="row"
                height="90vh"
              >
                <div className="responsive-container">
                  <NavMenu />
                  {renderGamingSection()}
                </div>
              </Container>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Gaming
