import { Button } from "@mui/material";
import { useContext } from "react";
import userContext from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {

    const { state } = useContext(userContext)

    const navigate = useNavigate()

    return (
        <>
            <h2>Kotisivu</h2>
            <div>
                <p style={{ fontSize: 30 }}>OpenShift</p>
                <p>Ohjelmistokehityksen tekniikoita - kurssia varten tehty seminaarityö. Tavoitteita minulla oli * kappaletta:</p>
                <ul style={{ width: 500, margin: 'auto' }}>
                    <li>Palvelimen tekeminen Java Spring bootilla</li>
                    <li>Käyttöliittymän tekeminen Reactilla</li>
                    <li>Käyttäjien lisääminen, rekisteröiminen sekä hallinnointi ulkoisesti (tähän valitsin Googlen Firebasen)</li>
                    <li>Palvelimen piti pystyä antamaan tietoja tietokannasta vain kirjautuneille käyttäjille</li>
                    <li>Nopea koodin kehittäminen, julkaisu sekä palvelun jatkuva saatavuus (CI/CD pipeline)</li>
                    <li>MySQL tietokanta liitettynä palvelimelle (OpenShiftin tarjoama tietokanta)</li>
                </ul>
                    
            </div>
        </>
    )
}