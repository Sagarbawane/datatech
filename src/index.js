import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./app";

import configureStore from "./store/configureStore";

const store = configureStore();
console.log("object", store.getState());

store.subscribe(() => {
    return console.log(store.getState());
});


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
