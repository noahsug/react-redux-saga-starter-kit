import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import { solverSaga, keyboardHandler } from './sagas'
import AppContainer from './containers/AppContainer'
import { SolverApi } from './lib'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

const solver = new SolverApi()
sagaMiddleware.run(solverSaga, solver)
sagaMiddleware.run(keyboardHandler)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
