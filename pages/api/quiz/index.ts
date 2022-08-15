import type { NextApiRequest, NextApiResponse } from 'next'
import { shuffle } from '../../../utils/shuffle'
import questions from '../questionsBase'

export default function quiz (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const questionsId = questions.map(question => question.id)
 res.status(200).json(shuffle(questionsId))
}
