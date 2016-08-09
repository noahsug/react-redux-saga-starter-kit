import { call, select } from 'redux-saga/effects'
import { putp } from '../actions/utils'
import { isSolving } from '../selectors'

/**
 * Resolves when the given key with optional modifier is pressed.
 * @param {string} keyCode E.g. 'Enter'.
 * @param {=string} modifier E.g. 'shiftKey', optional.
 */
function awaitKeyDown(keyCode, modifier) {
  return new Promise((resolve) => {
    function handleEvent(e) {
      if (e.code === keyCode && (!modifier || e[modifier])) {
        window.removeEventListener('keydown', handleEvent)
        resolve()
      }
    }
    window.addEventListener('keydown', handleEvent)
  })
}

// Calls CANCEL or SOLVE when enter is pressed.
export default function* keyboardHandler() {
  while (true) {
    yield call(awaitKeyDown, 'Enter')
    const solving = yield select(isSolving)
    yield putp(solving ? 'CANCEL' : 'SOLVE')
  }
}
