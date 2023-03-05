import './App.css'
import {Component} from 'react'

import {Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import Login from './components/Login'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import AppContext from './Context/AppContext'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    darkTheme: false,
    navId: 'HOME',
    savedVideosList: [],
    likedVideosList: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  addSavedVideos = videoDetails => {
    console.log('save!')
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  removeSavedVideos = videoDetails => {
    console.log('called!')
    const {id} = videoDetails
    const {savedVideosList} = this.state
    const updatedSavedVideosList = savedVideosList.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideosList: updatedSavedVideosList})
  }

  changeLikeStatus = (id, status) => {
    const {likedVideosList} = this.state
    const videoIdObject = likedVideosList.find(eachItem => eachItem.id === id)
    if (videoIdObject === undefined) {
      this.setState(prevState => ({
        likedVideosList: [...prevState.likedVideosList, {id, status}],
      }))
    } else {
      this.setState(prevState => ({
        likedVideosList: prevState.likedVideosList.map(eachObj => {
          if (eachObj.id === id) {
            return {...eachObj, status}
          }
          return eachObj
        }),
      }))
    }
  }

  changeNav = navId => {
    this.setState({navId})
  }

  render() {
    const {darkTheme, navId, savedVideosList, likedVideosList} = this.state

    return (
      <AppContext.Provider
        value={{
          darkTheme,
          navId,
          savedVideosList,
          likedVideosList,
          changeNav: this.changeNav,
          changeTheme: this.changeTheme,
          addSavedVideos: this.addSavedVideos,
          removeSavedVideos: this.removeSavedVideos,
          changeLikeStatus: this.changeLikeStatus,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}
export default App
