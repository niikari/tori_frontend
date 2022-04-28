import { Button } from "@mui/material";
import { useContext } from "react";
import userContext from "../context/userContext";


export default function LoginButton({ email, password }) {

    const { login } = useContext(userContext)

    const tryLogin = () => {
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        .then(res => res.json())
        .then(user => {
            user.error ? console.log("error") : login(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <Button onClick={tryLogin} >Kirjaudu</Button>
    )
}