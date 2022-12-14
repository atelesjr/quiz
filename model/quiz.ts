import { shuffle } from "../utils/shuffle"
import AnswerModel from "./answer"

export default class QuizModel {
  #id: number
  #question: string
  #answers: AnswerModel[]
  #gotRight: boolean

  constructor(
    id: number, question: string, 
    answers: AnswerModel[ ], gotRight = false
  ){
    this.#id = id
    this.#question = question
    this.#answers = answers
    this.#gotRight = gotRight
  }

  get id (){
    return this.#id
  }

  get question() {
    return this.#question
  }

  get answers() {
    return this.#answers
  }

  get gotRight() {
    return this.#gotRight
  }

  get answered() {
    for( let answer of this.#answers ){
      if(answer.revealed) return true
    }

    return false
  }

  get notAnswered() {
    return !this.answered

  }

  answeredWith(index: number): QuizModel {
    const gotRight = this.#answers[index]?.right
    const answers:any = this.#answers.map((answer, i) => {
      const selected = index === i
      const shouldReveal = selected || answer.right
      return shouldReveal ? answer.reveal() : answer
    })

    return new QuizModel(this.id, this.question, answers, gotRight)
  }

  shuffleAnswers():QuizModel {
    let answersSorted = shuffle(this.answers)
    return new QuizModel(this.#id, this.#question, answersSorted, this.#gotRight)
  }

  static createFromObject(obj: QuizModel): QuizModel {
    const answers = obj.answers.map( answer => AnswerModel.crreateFromObj(answer))
    return new QuizModel(obj.id, obj.question, answers, obj.gotRight)
  }

  toObject(){
    return {
      id: this.#id,
      question: this.#question,
      answered: this.answered,
      gotRight: this.#gotRight,
      answers: this.#answers.map( answer => answer.toObject()),
      
    }
  }

}