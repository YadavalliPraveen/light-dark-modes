import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  onBtnClick = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  getBtnText = () => {
    const {isLightMode} = this.state

    return isLightMode ? 'Dark Mode' : 'Light Mode'
  }

  getClassName = () => {
    const {isLightMode} = this.state

    return isLightMode ? 'light-card-container' : 'dark-card-container'
  }

  render() {
    const buttonText = this.getBtnText()
    const backgroundContainer = this.getClassName()

    return (
      <div className="background-container">
        <div className={backgroundContainer}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            onClick={this.onBtnClick}
            className="mode-button"
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
