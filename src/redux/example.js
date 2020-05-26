import { createStore } from 'redux'

<<<<<<< HEAD
// counter function this is a reducer, it takes the (beginning state, action) as it's parameters
// Then it describes how action types transform the state into the next state
=======
// counter function to create and define actions
>>>>>>> bc1e049635cd89e441fe17602427746bbd160173
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