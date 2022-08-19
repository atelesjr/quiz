import styles from '../styles/Quiz.module.css'
//model
import QuizModel from '../model/quiz'
//componet
import Question from './Question'
import Answer from './Answer'
import Timer from './Timer'

const letters = [
  { value: 'A', color: '#f2c866'},
  { value: 'B', color: '#f266ba'},
  { value: 'C', color: '#85d4f2'},
  { value: 'D', color: '#bce596'}
]

interface QuizProps {
  value: QuizModel
  timeToAnswer?: number
  answerSelected: (index: number) => void
  endTime: () => void
}

const Quiz = ({ value, answerSelected, endTime, timeToAnswer }:QuizProps) => {

  const renderAnswer = () => {
    return value.answers.map((answer, i) => {
      return (
        <Answer
          value={ answer }
          index={ i }
          letter={ letters[i].value }
          letterBkgColor={ letters[i].color }
          key={`${value.id}${i}`}
          answerSelected={ answerSelected }
        />
      )
    })
  }

  return (
    <div className={styles.quiz}>
      <Question text={ value.question } />
      <Timer 
        key={value?.id}
        duration={ timeToAnswer ?? 10 } 
        endTime={endTime} 
      />
      { renderAnswer() }
    </div>
  )
}

export default Quiz