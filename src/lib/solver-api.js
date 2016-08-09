import _ from '../utils'

export default class SolverApi {
  constructor() {
    this.prevValue_ = 0
    this.value_ = 1
  }

  * start() {
    yield 0
    yield 1
    for (let i = 0; i < 100; i++) {
      this.iterate_()
      yield this.printValue_()
    }
  }

  iterate_() {
    const newValue = this.value_ + this.prevValue_
    this.prevValue_ = this.value_
    this.value_ = newValue
  }

  printValue_() {
    return this.value_
  }
}
