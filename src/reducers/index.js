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
            const featureName = action.payload;
            const featurePrice = action.price;
            if (!state.car.features.some(item => item.name == featureName)) {
                return {
                    ...state,
                    additionalPrice: state.additionalPrice + featurePrice,
                    car: {
                        ...state.car, 
                        features: state.car.features.concat(
                            {name: featureName, price: featurePrice}
                        )
                    },
                    store: state.store.filter(item => item.name != featureName)
                };
            }
            return state;

        case "REMOVE_FEATURE":
            console.log('remove action: ', action.payload, action.price);

            return {
                ...state,
                additionalPrice: state.additionalPrice - action.price,
                car: {...state.car, features: state.car.features.filter(a => a.name != action.payload)},
                store: [...state.store, {name: action.payload, price: action.price}]
            }
        
        default:
            return state;
    }
}