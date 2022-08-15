
export default class AnswerModel {
  #value: string
  #right: boolean
  #revealed?: boolean

  constructor(
    value: string, right: boolean, revealed?: boolean,
  ) {
    this.#value = value
    this.#right = right
    this.#revealed = revealed
  }

  static right(value: string) {
    return new AnswerModel(value, true)
  }

  static wrong(value: string) {
    return new AnswerModel(value, false)
  }

  get value(){
    return this.#value
  }

  get right() {
    return this.#right
  }

  get revealed() {
    return this.#revealed
  }

  reveal(): AnswerModel {
    return new AnswerModel(this.#value, this.#right, true)
  }

  toObject() {
    return {
      value: this.#value,
      right: this.#right,
      revealed: this.#revealed 
    }
  }

}