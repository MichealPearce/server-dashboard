const initialState = {
    loaded: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "DYNAMIC_UPDATE":
            return {...state, ...payload, loaded: true}
        default:
            return state
    }
}
