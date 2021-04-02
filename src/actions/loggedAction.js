export const loggedAction = (data) => {
    return({
        type: "LOGGED_IN",
        payload: data
    })
}