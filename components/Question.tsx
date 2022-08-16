import styles from '../styles/Question.module.css'


interface QuestionProps {
  text: string
}

const Question = ({ text }: QuestionProps) => {

  return(
    <div className={ styles.question }>
      <span className={ styles.text }>
        { text }
      </span>
    </div>
  )
}

export default Question