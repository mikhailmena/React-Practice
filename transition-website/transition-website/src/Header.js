import React from "react";
import { Card } from "react-bootstrap";
import  Container from "react-bootstrap/Container";
import "./Header.css"



function Header (){
    return (
        <Container className="headerCont" >
            {/* <img src="./title.png" className="img-responsive" alt="image" style={{width: '58%'}}></img> */}
            <Card className="headerCont">
            <h1 id="headerTitle">-SSG's Simplified Military Transition</h1>

            </Card>
        </Container>
    )
}
export default Header;