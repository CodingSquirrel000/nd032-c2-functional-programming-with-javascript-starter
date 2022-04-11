// import { createStore, combineReducers } from 'redux'
// const SET_NAME = 'SET_NAME'
// const SET_AGE = 'SET_AGE'
// function user(state = initialUserState, action) {
//    switch (action.type) {
//        case SET_NAME: {
//            return {
//                ...state,
//                name: action.name,
//            }
//        }
//        case SET_AGE: {
//            return {
//                ...state,
//                age: action.age,
//            }
//        }
//    }
// }
// const ADD_TODO = 'ADD_TODO'
// const COMPLETE_TODO = 'COMPLETE_TODO'
// const initialState = {
//    todos: []
// }
// function todos(state = initialState, action) {
//  switch (action.type) {
//    case ADD_TODO: {
//        const { todos } = state
//        return {
//            ...state,
//            todos: [...todos, action.todo],
//        }
//    }
//    case COMPLETE_TODO: {
//        const { todos } = state
//        const index = todos.find(todo => todo.id == action.id)
//        toods[index].comleted = true
//        return {
//            ...state,
//            todos,
//        }
//    }
//    default:
//      return state
//  }
// }
// const reducers = combineReducers({
//    todos,
//    user,
// })
// const store = createStore(reducers)

//reducer.js

// Image that you are creating an app to control a spaceship that uses Redux 
// We are building out the feature to control shields, and in this exercise we are writing the Shield reducer
// We want to handle the following types of events: damage shield (a reduction in sheild level) and repair shield (increase shield level)

// Remember that every type of event is boiled down to a single ACTION, we import the ones we need from the actions file
// also notice that the actions are all caps because they are CONSTANT values, or, immutable values
import { DAMAGE_SHIELD, REPAIR_SHIELD } from './actions'

// We set an initial state so that there is a value in state available, even before any actions have occured
const initialState = {
	shieldLevel: 100,
}

// the reducer takes in the current state (if available - if not then it defaults to the initial state) and an action
const shieldsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAMAGE_SHIELD:
		
			// YOUR TURN: if the action object has a property called "amount", use destructuring to save that value to a const
			// YOUR CODE HERE
            const { amount } = action
		
            let { shieldLevel } = state

            // YOUR TURN: You now have the shield level from state and amount of change from the action. Given that this is the DAMAGE_SHIELD reducer, write the logic to reflect what should happen
			// YOUR CODE HERE
            shieldLevel -= amount;
			
            return {
                ...state,
                shieldLevel,
            }

        case REPAIR_SHIELD:
            
			// YOUR TURN: Using the reducer above as a template, fill in the contents of the REPAIR_SHIELD reducer
            const { amount2 } = action
            let { shieldLevel2 } = state
            shieldLevel2 += amount2;
            
            return {
                ...state,
                shieldLevel,
            }
    }
}