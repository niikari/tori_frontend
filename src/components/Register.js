import { TextField } from "@mui/material";
import { useState } from "react";
import RegisterButton from "./RegisterButton";


export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <h2>Rekisteröityminen</h2>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                width: 300,
                height: 190,
                justifyContent: "space-between",
                margin: 'auto'
            }}>
                <TextField 
                    label="Sähköposti" 
                    type="email"               
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField 
                    label="Salasana"
                    type="password"   
                    value={password}
                    onChange={e => setPassword(e.target.value)}             
                />
                <RegisterButton email={email} password={password} />
            </div>
        </>
    )
}