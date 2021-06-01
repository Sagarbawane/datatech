import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import orderReducer from "../reducers/orderReducer";

const configureStore = () => {
    const store = createStore(
        combineReducers({
            order: orderReducer,

        }),
        applyMiddleware(thunk)
    );
    return store;
};
export default configureStore;
