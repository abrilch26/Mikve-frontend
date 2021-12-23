const reducer = (globalState, action) => {
    switch (action.type) {

        case "LOGIN_SUCCEED":
        case "REGISTER_SUCCEED":
            localStorage.setItem("token", action.payload);
            return {
                ...globalState,
                authStatus: true,
            };


        case "REGISTER_FAIL":
        case "LOGIN_FAIL":
            return {
                ...globalState,
                authStatus: false,
                msg: action.payload,
            }


        case "GET_DATA_USER":
            return {
                ...globalState,
                authStatus: true,
                currentUser: action.payload,
            }

        case "LOGOUT_USUARIO":
            localStorage.removeItem("token");

            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: action.payload
            }

        case "UPDATE_PROFILE":
            return {
                ...globalState,
                currentUser: action.payload
            }


        default:  
        return globalState;  
    }
}


export default reducer;