import styles from '../styles/Survey.module.css'
import QuizModel from "../model/quiz";
import Quiz from './Quiz'
import Button from './Button';
import next from 'next';

interface SurveyProps {
  question?: QuizModel
  last: boolean
  questionAnswered: (question: QuizModel )=>void
  nextQuestion: ()=>void
}

const Survey = ({ question, last, questionAnswered, nextQuestion }:SurveyProps) => {

  const selectedAnswer = (index: number) => {
    question && questionAnswered(question?.answeredWith(index))
  }

  return (
    <div className={ styles.survey }>
      {
        question && (
          <Quiz 
            value={question} 
            timeToAnswer={6}
            answerSelected ={ selectedAnswer }
            endTime={nextQuestion}
          />
        )
      }

      <Button 
        onClick={nextQuestion} 
        text={ last ? 'Finnish' : 'Next'}
      />
      
    </div>
  );
}

export default Survey;