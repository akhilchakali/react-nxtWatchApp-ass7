import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaHotjar} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header/index'
import AppContext from '../../Context/AppContext'
import NavMenu from '../NavMenu'
import {
  Container,
  VideoContainer,
  Heading,
  IconContainer,
  TrendingContainer,
  Text,
  Image,
  Button,
  ListContainer,
} from './TrendingPageStyles'
import TrendingVideoCard from '../TrendingVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: dataItem.channel.name,
          profileImageUrl: dataItem.channel.profile_image_url,
        },
        id: dataItem.id,
        publishedAt: dataItem.published_at,
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
      {
        apiStatus: apiStatusConstants.inProgress,
      },
      this.getTrendingVideosData,
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
              <ListContainer>
                {videosList.map(eachItem => (
                  <TrendingVideoCard
                    key={eachItem.id}
                    videoDetails={eachItem}
                  />
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

          const renderTrendingVideos = () => {
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

          const renderTrendingVideoSection = () => (
            <VideoContainer
              data-testid="trending"
              flexDirection="column"
              height="90vh"
              darkTheme={darkTheme}
            >
              <TrendingContainer
                darkTheme={darkTheme}
                justifyContent="flex-start"
                alignItems="center"
              >
                <IconContainer
                  darkTheme={darkTheme}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FaHotjar />
                </IconContainer>
                <Heading darkTheme={darkTheme}>Trending</Heading>
              </TrendingContainer>
              {renderTrendingVideos()}
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
                  {renderTrendingVideoSection()}
                </div>
              </Container>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Trending
