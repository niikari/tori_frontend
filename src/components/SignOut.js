import { useContext } from "react";
import userContext from "../context/userContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";


export default function SignOut() {

    const { logout } = useContext(userContext)

    const navigation = useNavigate()

    return (
        <>
            <Button onClick={() => {
                logout()
                navigation("/login")
            }}>Kirjaudu ulos</Button>
        </>
    )

}