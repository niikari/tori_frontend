import { AppBar, Toolbar, Typography } from "@mui/material"
import { useContext } from "react"
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom"
import userContext from "../context/userContext"
import Advert from "./Advert"
import Adverts from "./Adverts"
import Home from "./Home"
import Login from "./Login"

export default function Navigator() {

    const { state } = useContext(userContext)

    return (
        <BrowserRouter>
        <AppBar position="static" style={{}} >
            <Toolbar>                 
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Toripalvelu ammattilaisille
              </Typography>   
                        
            </Toolbar>
            <div style={{
                display: 'flex',
                flexDirection: "row",
                margin: 'auto',
                width: 600,
                justifyContent: "space-between",
            }}>
                <Link style={{ textDecoration: 'none' }} to="/"><p style={{ fontSize: 20 }}>Kotisivu</p></Link>
                <Link style={{ textDecoration: 'none' }} to="/login"><p style={{ fontSize: 20 }}>Kirjautuminen</p></Link>
                <Link style={{ textDecoration: 'none' }} to="/adverts"><p style={{ fontSize: 20 }}>Ilmoitukset</p></Link>
                {
                    state.user && <Link style={{ textDecoration: 'none' }} to="/adverts"><p style={{ fontSize: 20 }}>Ilmoita</p></Link>
                }
            </div> 
        </AppBar>

            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/" exact element={<Home />} />
                {
                    state.user ? (
                        <Route path="/adverts" exact element={<Adverts />} />
                    ):
                    (
                        <Route path="/adverts" element={<Login />} />
                    )
                }
            </Routes>
        
        </BrowserRouter>
    )
}