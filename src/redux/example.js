import { createStore } from 'redux'

// counter function to create and define actions
function counter (state=0, action) {
    switch (action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// create the store for counter
let store = createStore(counter)

// store.subsribe (one part of the redux api) is used to update UI based on state change
store.subscribe(() => console.log(store.getState()))

// to mutate the internal state, we dispatch an action
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1