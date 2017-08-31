import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

//用redux创建的store
const store = createStore(reducer)
// Provider就是把我们用redux创建的store传递到内部的其他组件。
//让内部组件可以享有这个store并提供对state的更新。
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)