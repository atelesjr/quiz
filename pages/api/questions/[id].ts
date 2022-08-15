import type { NextApiRequest, NextApiResponse } from 'next'
import questions from '../questionsBase'

export default function questionId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const idSelected = req.query.id ? +req.query.id : 306
  const selectedQuestion = questions.filter( 
    question => question.id === idSelected
  )

  if(selectedQuestion.length === 1){
    const selected = selectedQuestion[0].shuffleAnswers()
    // const obj = selected.answeredWith(0).toObject()
    // console.log(obj)
    res.status(200).json(selected.toObject())
    //res.status(200).json(obj)
  } else {
    res.status(204).send('Invalid')
  }

  
}
