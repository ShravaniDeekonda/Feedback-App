// Write your React code here.
import React, {useState} from 'react'
import './index.css'

const Feedback = props => {
  const {emojis, loveEmojiUrl} = props.resources
  const [isFeedbackSelected, setIsFeedbackSelected] = useState(false)

  const handleEmojiClick = () => {
    setIsFeedbackSelected(true)
  }

  return (
    <div className="feedback-app-container">
      {!isFeedbackSelected ? (
        <div className="feedback-question-container">
          <h1 className="feedback-question">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button type="button" onClick={handleEmojiClick}>
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-img"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="thank-you-container">
          <h1 className="thank-you-heading">Thank You</h1>
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji-img" />
        </div>
      )}
    </div>
  )
}

export default Feedback
