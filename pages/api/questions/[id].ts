import type { NextApiRequest, NextApiResponse } from 'next'
import questions from '../questionsBase'

export default function questionId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const idSelected = req.query.id ? +req.query.id : 0
  const selectedQuestion = questions.filter( 
    question => question.id === idSelected
  )

  if(selectedQuestion.length === 1){
    const selected = selectedQuestion[0].shuffleAnswers()
    res.status(200).json(selected.toObject())
  } else {
    res.status(204).send('Invalid')
  }

  
}
