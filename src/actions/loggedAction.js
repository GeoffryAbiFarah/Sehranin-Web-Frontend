export const loggedAction = (data) => {
    return({
        type: "LOGGED_IN",
        payload: data
    })
}

export const loggedOutAction = () => {
    return({
        type: "LOGGED_OUT"
    })
}