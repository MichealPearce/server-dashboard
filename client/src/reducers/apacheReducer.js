const initialState = {
    loaded: false,
    sites: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "APACHE_SITES_UPDATE":
            return {...state, sites: payload, loaded: true}
        default:
            return state
    }
}
