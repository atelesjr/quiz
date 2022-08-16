import type { NextPage } from 'next'
import Quiz from '../components/Quiz'
import AnswerModel from '../model/answer'
import QuizModel from '../model/quiz'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const questionTest = new QuizModel(1, 'The best color?', [
    AnswerModel.wrong('Green'),
    AnswerModel.wrong('Red'),
    AnswerModel.wrong('Blue'),
    AnswerModel.wrong('Black')
  ])



  return (
    <div className={styles.container}>
      <Quiz value={questionTest} />
    </div>
  )
}

export default Home
