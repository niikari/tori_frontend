import { useReducer } from "react";
import userReducer from "./userReducer";
import UserContext from "./userContext";

export default function UserState(props) {

    const initialState = {
        user: null
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    const login = (user) => {
        dispatch({
            type: "LOGIN",
            payload: user
        })
    }

    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }

    const register = (user) => {
        dispatch({
            type: "REGISTER",
            payload: user
        })
    }

    return (
        <UserContext.Provider value={{
            state, login, logout, register
        }}>
            {props.children}
        </UserContext.Provider>
    )
}