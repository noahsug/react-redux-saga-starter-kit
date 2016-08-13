import { delay } from 'redux-saga'
import { race, call, take } from 'redux-saga/effects'
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
  } finally {
    return true
  }
}

export default function* solverSaga(solver) {
  while (true) {
    yield take('SOLVE')
    const result = yield race({
      finished: call(solve, solver),
      canceled: take('CANCEL'),
    })
    if (result.finished) yield putp('FINISH')
  }
}
