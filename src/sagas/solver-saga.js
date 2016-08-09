import { delay } from 'redux-saga'
import { race, call, fork, take } from 'redux-saga/effects'
import { putp } from '../actions/utils'

function* solve(solver) {
  try {
    const resultGen = solver.start()
    let next = resultGen.next()
    while (!next.done) {
      yield putp('UPDATE', next.value)
      yield call(delay, 10)
      next = resultGen.next()
    }
  } catch (e) {
    console.error(e)  // eslint-disable-line no-console
  }
}

export default function* solverSaga(solver) {
  while (true) {
    yield take('START')
    const result = yield race({
      finished: fork(solve, solver),
      canceled: take('CANCEL'),
    })
    if (result.finished) yield putp('FINISH')
  }
}
