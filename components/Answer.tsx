import styles from '../styles/Answer.module.css'
import AnswerModel from '../model/answer'

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterBkgColor: string
  answerSelected: (index: number) => void
}

const Answer = ({ 
  value, index, letter, 
  letterBkgColor, answerSelected 
}: AnswerProps) => {
  const answerRevealed = value.revealed ? styles.answerRevealed : ''
  return (
    <div 
      className={ styles.answer }
      onClick={() => answerSelected(index) }
    >
      <div className={ `${ answerRevealed } ${ styles.answerContent }` }>
          <div className={ styles.front }>
            <div 
              className={styles.letter}
              style={{ backgroundColor: letterBkgColor }}
            >
              { letter }
            </div>
            <div className={styles.value}>
              { value.value }
            </div>
          </div>

          <div className={styles.back}>
          {
            value.right 
            ?(
              <div className={styles.right}>
                <div>The right answer is...</div>
                <div className={styles.value}>{ value.value }</div>
              </div>
            ):(
              <div className={styles.wrong}>
                <div>The answer is wrong!</div>
                <div className={styles.value}>{ value.value }</div>
              </div>
            )
          }
          </div>

      </div>
    </div>
  );
}

export default Answer;