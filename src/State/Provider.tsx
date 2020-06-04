import React, { useReducer } from 'react'
import Context from './Context'
import { reducer, initialState } from './Reducer'
import getActions from './Actions'
import getSelectors from './Selectors'

interface Props {
  foo?: string
}

const Provider: React.FC<Props> = ({ foo, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = getActions(state, dispatch)
  const selectors = getSelectors(state)
  const value = {
    actions,
    selectors,
    dispatch,
    state
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default Provider