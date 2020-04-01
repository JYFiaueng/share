var fullScreen = false
document.getElementById("body").ondblclick = () => {
  if (fullScreen) {
    document.webkitExitFullscreen()
  } else {
    body.webkitRequestFullScreen()
  }
  fullScreen = !fullScreen
}