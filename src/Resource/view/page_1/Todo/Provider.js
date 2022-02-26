
import { useReducer } from 'react'
import ContextList from './context'
import reducer, { initState } from './reducer'


function Provider ( {children} ) {

    const [state, dispatch] = useReducer(reducer, initState)

    return(
       <ContextList.Provider value={[state, dispatch]}>
           {children}
       </ContextList.Provider>
    )
}

export default Provider
