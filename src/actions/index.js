// STEP 3 - build an action creator for any event that might happen in your app that should cause your state to be updated

// action creator - a function that 'creates' and 'return' actions

export const addNewItem = (name, price) => {
    return { type: "BUY_FEATURE", payload: name, price: price}
}

export const removeItem = (name, price) => {
    return { type: "REMOVE_FEATURE", payload: name, price: price }
}