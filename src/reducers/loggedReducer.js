const initial_state = {
    token: "",
    id: ""
}

export const loggedReducer = (state= initial_state, action) => {
    switch (action.type) {
        case "LOGGED_IN":
            return {...state,
                token: action.payload.token,
                id: action.payload.id
            };
            case "LOGGED_OUT":
            return {...state,
                token: "",
                id: ""
            };
        default:
            return state;
    }
}

