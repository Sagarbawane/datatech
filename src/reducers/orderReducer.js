const initialOrder = [
    {

        "name": "Skechers",
        "order": "370 Rs ",
        "extra": 'black color shoe'
    },
    {

        "name": "Pen",
        "order": "300 Rs",
        "extra": 'Pack it in gift papaer'
    },
    {

        "name": "T-shirt",
        "order": "400 Rs ",
        "extra": 'size xl'
    },
    {

        "name": "ADIDAS",
        "order": "430 Rs",
        "extra": 'color black'
    },
    {

        "name": "Nike",
        "order": "500 Rs ",
        "extra": 'Bat of apple =wood'
    },
    {

        "name": "Puma",
        "order": "420 Rs ",
        "extra": 'Snikkers'
    },
];

const orderReducer = (state = initialOrder, action) => {
    switch (action.type) {
        case "ADD_ORDER": {
            return state.concat(action.payload);
        }
        case "EDIT_ORDER": {
            return state.map((ele) => {
                console.log(action.payload.name);
                if (ele.name == action.payload.name) {
                    console.log(ele)
                    console.log(action.payload)
                    const data = (Object.assign({}, ele, action.payload.formData))
                    console.log(data)
                    return Object.assign({}, ele, action.payload.formData);

                } else {
                    return Object.assign({}, ele);
                }
            });
        }

        case "DELETE_ORDER": {
            return state.filter((ele) => ele.name !== action.payload);
        }

        default: {
            return [].concat(state);
        }
    }
};

export default orderReducer;
