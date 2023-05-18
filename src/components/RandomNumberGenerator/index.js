import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {radomNumber: 0}

  onClickGenerate = () => {
    const newRandomNum = Math.ceil(Math.random() * 100)
    this.setState({
      radomNumber: newRandomNum,
    })
  }

  render() {
    const {radomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onClickGenerate}
          >
            Generate
          </button>
          <p className="heading number">{radomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
