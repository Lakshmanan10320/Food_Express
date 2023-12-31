import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items:[],
    totalAmount: 0
};

const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingcartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingcartItem = state.items[existingcartItemIndex];
        let updatedItems;

        if(existingcartItem) {
            const updatedItem ={
                ...existingcartItem,
                amount: existingcartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingcartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

    }

    if(action.type === 'REMOVE') {
        const existingcartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingcartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount:existingItem.amount-1};
            updatedItems = [...state.items];
            updatedItems[existingcartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchcartAction] = useReducer(cartReducer,defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchcartAction({type: 'ADD', item: item});
    };
    const removeItemFromCartHandler = (id) => {
        dispatchcartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;