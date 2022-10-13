// here we define all the application level states and define actions to make state changes to
// the state. So we create the Stateprovider and retrieve them from data level to application level

export const initialState = {
    basket: [],
}


// Selector to select the state and make an action to the state provider
// the reducer is immutable
const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
        return {
            // returns the initial state indicated by ...state
            ...state,
            // adds to the initial state, the basket and action.item
            basket: [...state.basket, ...state.action],
        }
    }
}

export default reducer;