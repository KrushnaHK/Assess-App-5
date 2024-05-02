import {Component} from 'react'

import './index.css'

class Questions extends Component {
  state = {
    index: 0,
  }

  renderFourOption = option => <li className="options">{option.text}</li>

  renderImageOption = option => <img src={option.image_url} alt={option.text} />

  renderSelectOption = option => (
    <option value={option.text}>{option.text}</option>
  )

  renderOption = questionInfo => {
    switch (questionInfo.optionType) {
      case 'DEFAULT':
        return questionInfo.options.map(eachOption =>
          this.renderFourOption(eachOption),
        )
      case 'IMAGE':
        return questionInfo.options.map(eachOption =>
          this.renderImageOption(eachOption),
        )
      case 'SINGLE_SELECT':
        return (
          <select>
            {questionInfo.options.map(eachOption =>
              this.renderSelectOption(eachOption),
            )}
          </select>
        )
      default:
        return null
    }
  }

  onClickNextQuestion = () => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }))
  }

  render() {
    const {questionList} = this.props
    const {index} = this.state

    return (
      <div>
        <h1>
          {index + 1}.{questionList[index].questionText}
        </h1>
        {this.renderOption(questionList[index])}
        <button
          className="next-question-button"
          type="button"
          onClick={this.onClickNextQuestion}
        >
          Next Question
        </button>
      </div>
    )
  }
}

export default Questions
