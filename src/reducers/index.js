const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case "BUY_FEATURE": 
        console.log('action: ', action.payload, action.price);
            return  {
                ...state,
                additionalPrice: state.additionalPrice + action.price,
                car: {...state.car, features: [...state.car.features, {name: action.payload, price: action.price}]}
            };
        case "REMOVE_FEATURE":
        console.log('remove action: ', action.payload, action.price);
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.price,
                car: {...state.car, features: state.car.features.filter(a => a.name != action.payload)}
            }
        // case "ADDED_TOTAL":
        // console.log('total action: ', action.payload);
        //     return {
        //         ...state,
        //         additionalPrice: state.additionalPrice + action.payload
        //     }
        // case "REMOVED_TOTAL":
        // console.log('removed total action: ', action.payload);
        //     return {
        //         ...state,
        //         additionalPrice: state.additionalPrice - action.payload
        //     }
        default:
            return state;
    }
}