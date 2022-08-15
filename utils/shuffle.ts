export const shuffle = (array: any[]):any[] => {
  const randomQuestions = array
    .map( question => ({ id: question, position: Math.random()}))
    .sort((question1, question2) => question1.position - question2.position)
    .map(question => question.id )

  return randomQuestions
}