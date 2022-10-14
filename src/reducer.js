// here we define all the application level states and define actions to make state changes to
// the state. So we create the Stateprovider and retrieve them from data level to application level

export const initialState = {
    basket: [],
};


// selector function. the total basket and what it contains
export const getBasketTotal = (basket) => {
    return(basket.reduce((amount, item) => item.price + amount, 0));
}




// the reducer is immutable (it is never changed)
const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
        return {
            // returns the initial state indicated by ...state
            ...state,
            // adds to the initial state, the basket and action.item
            basket: [...state.basket, action.item],
        } 


        default:
            return state;
    }
}

export default reducer;