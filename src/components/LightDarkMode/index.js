// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onModeChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="mode-bg-container">
        <div className={`mode-container ${modeClassName}`}>
          <h1 className="mode-heading">Click To Change Mode</h1>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onModeChange}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
