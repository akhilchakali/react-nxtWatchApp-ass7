import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BiSearchAlt2} from 'react-icons/bi'
import Cookies from 'js-cookie'
import {
  Container,
  Button,
  SearchButton,
  SearchInputBar,
  VideoContainer,
  ListContainer,
  SearchContainer,
  Image,
  Text,
  Heading,
} from './styledComponents'
import Header from '../Header/index'
import AppContext from '../../Context/AppContext'
import NavMenu from '../NavMenu'
import Banner from '../Banner'
import VideoLoader from '../VideoLoader'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    isBannerClosed: false,
  }

  componentDidMount() {
    this.getVideosData()
  }

  captureSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  closeBanner = () => {
    this.setState({isBannerClosed: true})
  }

  onClickSearch = () => {
    this.setState(
      {apiStatus: apiStatusConstants.inProgress},
      this.getVideosData,
    )
  }

  getVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  render() {
    const {searchInput, apiStatus, videosList, isBannerClosed} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {darkTheme} = value

          const renderSuccessView = () => {
            if (videosList.length > 0) {
              return (
                <>
                  <ListContainer darkTheme={darkTheme}>
                    {videosList.map(eachItem => (
                      <VideoLoader key={eachItem.id} videoDetails={eachItem} />
                    ))}
                  </ListContainer>
                </>
              )
            }
            return (
              <VideoContainer
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="90vh"
                data-testid="home"
                darkTheme={darkTheme}
              >
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <Heading darkTheme={darkTheme}>No Search results found</Heading>
                <Text>Try different key words or remove search filter</Text>
                <Button type="button" onClick={this.onClickSearch}>
                  Retry
                </Button>
              </VideoContainer>
            )
          }

          const renderFailureView = () => (
            <VideoContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="90vh"
              data-testid="home"
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

          const renderAllVideos = () => {
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

          const renderVideoSection = () => (
            <>
              <VideoContainer
                data-testid="home"
                flexDirection="column"
                darkTheme={darkTheme}
              >
                {isBannerClosed ? (
                  ''
                ) : (
                  <Banner closeBanner={this.closeBanner} />
                )}
                <SearchContainer darkTheme={darkTheme}>
                  <SearchInputBar
                    type="search"
                    value={searchInput}
                    onChange={this.captureSearchInput}
                    placeholder="Search"
                    darkTheme={darkTheme}
                  />
                  <SearchButton
                    type="button"
                    darkTheme={darkTheme}
                    data-testid="searchButton"
                    onClick={this.onClickSearch}
                  >
                    <BiSearchAlt2 className="search-icon" />
                  </SearchButton>
                </SearchContainer>
                {renderAllVideos()}
              </VideoContainer>
            </>
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
                  {renderVideoSection()}
                </div>
              </Container>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
