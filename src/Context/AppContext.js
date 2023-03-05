import React from 'react'

const AppContext = React.createContext({
  darkTheme: false,
  savedVideosList: [],

  likedVideosList: [],
  changeTheme: () => {},
  changeNav: () => {},
  changeLikeStatus: () => {},
  removeSavedVideos: () => {},
  addSavedVideos: () => {},
})

export default AppContext
