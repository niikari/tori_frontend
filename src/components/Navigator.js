import { AppBar, Toolbar, Typography } from "@mui/material"
import { useEffect } from "react"
import { useContext } from "react"
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom"
import userContext from "../context/userContext"
import Advert from "./Advert"
import Adverts from "./Adverts"
import CreateAdvert from "./CreateAdvert"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import SignOut from "./SignOut"

export default function Navigator() {

    const { state, login } = useContext(userContext)

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
                width: 800,
                justifyContent: "space-between",
            }}>
                
                {
                    state.user ? (
                        <div style={{
                            display: 'flex',
                            flexDirection: "row",
                            margin: 'auto',
                            width: 800,
                            justifyContent: "space-between",
                        }}>
                           <Link style={{ textDecoration: 'none' }} to="/"><p style={{ fontSize: 20 }}>Kotisivu</p></Link>
                           <Link style={{ textDecoration: 'none' }} to="/adverts"><p style={{ fontSize: 20 }}>Ilmoitukset</p></Link>
                           <Link style={{ textDecoration: 'none' }} to="/newadvert"><p style={{ fontSize: 20 }}>Ilmoita</p></Link>
                           <Link style={{ textDecoration: 'none' }} to="/signout"><p style={{ fontSize: 20 }}>Kirjaudu ulos</p></Link>
                        </div>
                    ): (
                        <div style={{
                            display: 'flex',
                            flexDirection: "row",
                            margin: 'auto',
                            width: 800,
                            justifyContent: "space-between",
                        }}>
                            <Link style={{ textDecoration: 'none' }} to="/"><p style={{ fontSize: 20 }}>Kotisivu</p></Link>
                            <Link style={{ textDecoration: 'none' }} to="/adverts"><p style={{ fontSize: 20 }}>Ilmoitukset</p></Link>
                            <Link style={{ textDecoration: 'none' }} to="/login"><p style={{ fontSize: 20 }}>Kirjautuminen</p></Link>
                            <Link style={{ textDecoration: 'none' }} to="/register"><p style={{ fontSize: 20 }}>Rekisteröityminen</p></Link>                            
                        </div>
                    )
                }
            </div> 
        </AppBar>

            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/" exact element={<Home />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/adverts" exact element={<Adverts />} />
                {
                    state.user ? (
                        <Route path="/adverts" exact element={<Adverts />} />
                    ):
                    (
                        <Route path="/adverts" element={<Login />} />
                    )
                }
                {
                    state.user && 
                    <Route path="/signout" exact element={<SignOut />} />
                }
                { state.user && <Route path="/newadvert" element={<CreateAdvert />} /> }
            </Routes>
        
        </BrowserRouter>
    )
}