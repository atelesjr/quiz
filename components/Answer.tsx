import styles from '../styles/Answer.module.css'
import AnswerModel from '../model/answer'


interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterColor: string
}

const Answer = ({ value, index, letter, letterColor }: AnswerProps) => {
  
  return (
    <div className={ styles.answer }>
      <div className={ styles.answerContent }>
        <div className={styles.front}>
          <div className={styles.letter}>
            { letter }
          </div>
          <div className={styles.value}>
            { value.value }
          </div>
        </div>
        <div className={styles.back}>
          
          </div>

      </div>
    </div>
  );
}

export default Answer;