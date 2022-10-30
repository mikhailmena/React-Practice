import React from "react";

import  Container from "react-bootstrap/Container";
import "./Navbar2.css"



function NavBar2 (){
    return (
        <Container >
            <img src="./flag.png" className="img-responsive" alt="image" style={{width: '75%'}}></img>
            <nav  class="border border-tan" id="sidebarMenu">
  {/*             <nav  class="collapse d-lg-block sidebar collapse bg-black border-info" id="sidebarMenu"> */}
              <div class="position-sticky " id="sidebarMenu">
                <div class="list-group list-group-flush mx-3 mt-4" >
                  <a  href="#" class="list-group-item list-group-item-action py-2 ripple navbar2Div" aria-current="true" >
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Home</span>
                  </a>
                  
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple navbar2Div"><i
                      class="fas fa-lock fa-fw me-3"></i><span>Transition E-book</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple navbar2Div"><i
                      class="fas fa-chart-line fa-fw me-3"></i><span>Transition Calculators</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple navbar2Div">
                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>Resources</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple navbar2Div"><i
                      class="fas fa-chart-bar fa-fw me-3"></i><span>Contact Me</span></a>
                 
                </div>
              </div>
            </nav>
        </Container>
    )
}
export default NavBar2;