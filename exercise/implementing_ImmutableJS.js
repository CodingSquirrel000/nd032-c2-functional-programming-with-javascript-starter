const Immutable = require('immutable');

let store = Immutable.Map({ 
    user: Immutable.Map({ 
        firstName: 'John', 
        lastName: 'Doe' 
    }), 
})
let newState = Immutable.Map({
    user: Immutable.Map({ 
        firstName: 'Kitty', 
        lastName: 'Doe' 
    }), 
})
function updateStore(state, newState) {
    store = state.merge(newState)
    render(root, store)
}

updateStore(store, newState)
console.log(store.getIn(['user', 'name']))