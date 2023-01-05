// here we define all the application level states and define actions to make state changes to
// the state. So we create the Stateprovider and retrieve them from data level to application level

export const initialState = {
    basket: [],
};


// selector function. the total basket and what it contains
export const getBasketTotal = (basket) => {
    // the .reduce function works on the function to produce a single value
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
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index>=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                )

            } 

            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;