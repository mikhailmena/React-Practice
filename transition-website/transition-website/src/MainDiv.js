
import React from 'react';
import NavDiv from './Navigation';
import App from './App';
import  Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavBar2 from './Navbar2';
import "./MainDiv.css"
import Footer from './Footer';
import Intro from './Intro';

function MainDiv() {
    return (
        <Container>
            <Row >
                <Col xs={2}  id="navColumn">
                    
                    <NavBar2/>
                </Col>
                <Col >
                    <App/>
                </Col>
                
            </Row>
            <Footer/>
        </Container>
    )
}
export default MainDiv