import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
} from 'react-icons/ai'
import {MdLibraryAdd, MdPlaylistAddCheck} from 'react-icons/md'
import AppContext from '../../Context/AppContext'
import NavMenu from '../NavMenu'
import Header from '../Header'
import {
  Container,
  VideoContainer,
  Button,
  Text,
  Heading,
  VideoTitle,
  Image,
  HorizontalLine,
  DetailsContainer,
  ReactPlayerE,
  ActionButton,
  DisLikeButton,
  LikeButton,
  IconContainer,
  Span,
  ButtonsContainer,
  ChannelDescription,
  ChannelSubscribers,
  ChannelName,
  ChannelNameContainer,
  ChannelImg,
  ChannelContainer,
  TextDescription,
} from './VideoDetailsItemStyles'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {videoDetails: '', apiStatus: apiStatusConstants.inProgress}

  componentDidMount = () => {
    this.getVideoDetails()
  }

  onClickRetryBtn = () => {
    this.setState(
      {apiStatus: apiStatusConstants.inProgress},
      this.getVideoDetails,
    )
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        publishedAt: data.video_details.published_at,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    const {apiStatus, videoDetails} = this.state
    const {
      videoUrl,
      description,
      viewCount,
      publishedAt,
      title,
      channel,
      id,
    } = videoDetails
    return (
      <AppContext.Consumer>
        {value => {
          const {
            darkTheme,
            savedVideosList,
            addSavedVideos,
            removeSavedVideos,
            likedVideosList,
            changeLikeStatus,
          } = value

          const isVideoSaved = () => {
            const videoSaved = savedVideosList.find(
              eachVideo => eachVideo.id === id,
            )
            if (videoSaved === undefined) {
              return false
            }
            return true
          }

          const getVIdeoLikeStatus = () => {
            const videoObject = likedVideosList.find(
              eachItem => eachItem.id === id,
            )
            if (videoObject === undefined) {
              return 'NONE'
            }
            return videoObject.status
          }

          const isSaved = isVideoSaved()
          const likeStatus = getVIdeoLikeStatus()

          const onClickLike = () => {
            if (likeStatus === 'LIKE') {
              changeLikeStatus(id, 'NONE')
            } else {
              changeLikeStatus(id, 'LIKE')
            }
          }

          const onClickDislike = () => {
            if (likeStatus === 'DISLIKE') {
              changeLikeStatus(id, 'NONE')
            } else {
              changeLikeStatus(id, 'DISLIKE')
            }
          }

          const onClickSave = () => {
            if (isSaved === false) {
              addSavedVideos(videoDetails)
            } else {
              removeSavedVideos(videoDetails)
            }
          }

          const getTime = () => {
            const formattedDate = formatDistanceToNow(new Date(publishedAt))

            return formattedDate
          }

          const renderVideoPlayer = () => (
            <ReactPlayerE controls url={videoUrl} width="70%" height="60vh" />
          )

          const renderVideoDetails = () => (
            <>
              <VideoTitle darkTheme={darkTheme}>{title}</VideoTitle>
              <DetailsContainer
                darkTheme={darkTheme}
                justifyContent="space-between"
              >
                <TextDescription>
                  {viewCount} views . {getTime()}
                </TextDescription>
                <ButtonsContainer darkTheme={darkTheme} alignItems="center">
                  <LikeButton
                    darkTheme={darkTheme}
                    likeStatus={likeStatus}
                    onClick={onClickLike}
                  >
                    <IconContainer darkTheme={darkTheme}>
                      {likeStatus === 'LIKE' ? (
                        <AiFillLike />
                      ) : (
                        <AiOutlineLike />
                      )}
                      <Span>Like</Span>
                    </IconContainer>
                  </LikeButton>
                  <DisLikeButton
                    darkTheme={darkTheme}
                    likeStatus={likeStatus}
                    onClick={onClickDislike}
                  >
                    <IconContainer darkTheme={darkTheme}>
                      {likeStatus === 'DISLIKE' ? (
                        <AiFillDislike />
                      ) : (
                        <AiOutlineDislike />
                      )}
                      <Span>Dislike</Span>
                    </IconContainer>
                  </DisLikeButton>
                  <ActionButton
                    darkTheme={darkTheme}
                    isSaved={isSaved}
                    onClick={onClickSave}
                  >
                    <IconContainer darkTheme={darkTheme}>
                      {isSaved ? <MdPlaylistAddCheck /> : <MdLibraryAdd />}
                      <Span>{isSaved ? 'Saved' : 'Save'}</Span>
                    </IconContainer>
                  </ActionButton>
                </ButtonsContainer>
              </DetailsContainer>
            </>
          )

          const renderChannelDetails = () => (
            <ChannelContainer darkTheme={darkTheme}>
              <ChannelImg src={channel.profileImageUrl} alt="channel logo" />
              <ChannelNameContainer>
                <ChannelName darkTheme={darkTheme}>{channel.name}</ChannelName>
                <ChannelSubscribers>
                  {channel.subscriberCount} subscribers
                </ChannelSubscribers>
                <ChannelDescription darkTheme={darkTheme}>
                  {description}
                </ChannelDescription>
              </ChannelNameContainer>
            </ChannelContainer>
          )

          const renderSuccessView = () => (
            <VideoContainer
              data-testid="videoItemDetails"
              darkTheme={darkTheme}
              flexDirection="column"
            >
              {renderVideoPlayer()}
              {renderVideoDetails()}
              <HorizontalLine />
              {renderChannelDetails()}
            </VideoContainer>
          )

          const renderFailureView = () => (
            <VideoContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="90vh"
              darkTheme={darkTheme}
            >
              <Image
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <Heading darkTheme={darkTheme}>
                Oops! Something Went Wrong
              </Heading>
              <Text>
                We are having some trouble to complete your request. Please try
                again.
              </Text>
              <Button type="button" onClick={this.onClickRetryBtn}>
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
                sss
                width="50"
                height="50"
                data-testid="loader"
              />
            </VideoContainer>
          )

          const renderVideoDetailsSection = () => {
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
                  {renderVideoDetailsSection()}
                </div>
              </Container>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
