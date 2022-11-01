
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
                <iframe src="./GettingOutMadeSimple.pdf#zoom=400&toolbar=0" height="2000em" width="2100em"  toolbar="0"></iframe>
                    {/* <App/> */}
                </Col>
                
            </Row>
            {/* <Footer/> */}
        </Container>
    )
}
export default MainDiv