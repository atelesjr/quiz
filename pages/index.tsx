import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import Survey from '../components/Survey'
import QuizModel from '../model/quiz'
import { useRouter } from 'next/router'


const BASE_URL = 'http://localhost:3000/api'

const Home: NextPage = () => {
  const router = useRouter()
  const [ question, setQuestion ] = useState<QuizModel | undefined>(undefined)
  const [ questionsIds, setQuestionsIds ] = useState<number[]>([])
  const [ righAnswers, setRightAnswers ] = useState<number>(0)

  const getQuestionsIds = async() => {
    const res = await fetch(`${BASE_URL}/quiz`)
    const ids = await res.json()
    console.log(ids)
    setQuestionsIds(ids)
  }

  const getQuestions = async(id: number) => {
    const res = await fetch(`${BASE_URL}/questions/${id}`)
    const json = await res.json()
    const question = QuizModel.createFromObject(json)
    setQuestion(question)
  
  }

  useEffect(() => {
    getQuestionsIds()
  }, [])
  
  useEffect(() => {  
    questionsIds.length > 0 && getQuestions(questionsIds[0])
  }, [questionsIds])


  const questionAnswered =(question: QuizModel) => {
    setQuestion(question)
    const gotRight = question.gotRight
    setRightAnswers(righAnswers + ( gotRight ? 1 : 0))
  }

  const nextIdQuestion = () => {
    if (question) {
      const nextId = questionsIds.indexOf(question.id) + 1
      return questionsIds[nextId]
    }
  }

  const nextQuestion = (id: number) => {
    getQuestions(id)
  }

  const finnish = () => {
    router.push({
      pathname: '/result',
      query: {
        total: +questionsIds.length,
        rightAnswers: +righAnswers
      }
    })
  }

  const nextStep = () => {
    const nextId = nextIdQuestion()
    nextId ? nextQuestion(nextId) : finnish()
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      { question 
        ?(
          <Survey
            question={question}
            last={ nextIdQuestion() === undefined }
            questionAnswered={questionAnswered}
            nextQuestion={nextStep}
          />
        ):(
          <></>
        )
      }
    </div>
  )
}

export default Home