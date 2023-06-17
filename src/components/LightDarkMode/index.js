// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: false}

  onClickButton = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  content = () => {
    const {darkMode} = this.state

    if (darkMode === true) {
      return {
        className: 'light-mode-con container',
        heading: 'light-heading heading',
        buttonText: 'Dark Mode',
      }
    }
    return {
      className: 'dark-mode-con container',
      heading: 'dark-heading heading',
      buttonText: 'Light Mode',
    }
  }

  render() {
    const {className, heading, buttonText} = this.content()

    return (
      <div className="bg-container">
        <div className={className}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
