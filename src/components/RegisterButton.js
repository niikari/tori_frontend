import { Button } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router";
import userContext from "../context/userContext";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default function RegisterButton({ email, password }) {

    const { register, login } = useContext(userContext)

    const navigation = useNavigate()

    const tryRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
            register(user._tokenResponse)
            registerToDatabase(user._tokenResponse)
        })
        .catch(err => console.error("Tuli tänne " + err))
    }

    const registerToDatabase = (user) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.idToken}`
            },
            body: JSON.stringify({
                email: user.email
            })
        })
        .then(() => navigation("/adverts"))
        .catch(err => console.error(err))
    }
       

    return (
        <Button onClick={tryRegister}>Rekisteröidy</Button>
    )
}