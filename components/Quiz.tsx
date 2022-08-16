import styles from '../styles/Quiz.module.css'
//model
import QuizModel from '../model/quiz'
//componet
import Question from './Question'
import Answer from './Answer'

interface QuizProps {
  value: QuizModel
}

const Quiz = ({ value }:QuizProps) => {
  const { quiz } = styles

  const renderAnswer = () => {
    return value.answers.map((answer, i) => {
      return (
        <Answer
          value={answer}
          index={i}
          letter='A'
          letterColor='#f2c866'
          key={i}
        />
      )
    })
  }


  return (
    <div className={quiz}>
      <Question text={ value.question } />
      { renderAnswer() }
    </div>
  )
}

export default Quiz