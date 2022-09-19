import React from 'react';
import { render } from 'react-dom'
import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from "./App"
import reducer from "./store/reducer"

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
)