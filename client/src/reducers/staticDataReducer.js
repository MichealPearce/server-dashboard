const initialState = {
    loaded: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "STATIC_UPDATE":
            return {...state, ...payload, loaded: true}
        default:
            return state
    }
}
