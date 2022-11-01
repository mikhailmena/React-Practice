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
                      class="fas fa-chart-line fa-fw me-3"></i><span>Transition Calculators</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple navbar2Div">
                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>Resources</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple navbar2Div">
                    <i class="fas fa-chart-bar fa-fw me-3"></i>
                      <a href="mailto: marcmmenard@gmail.com">Contact Me</a>
                      </a>
                                         <a href='https://www.amazon.com/How-Influential-Leader-Identify-leadership-ebook/dp/B0BHPX4CQ4/ref=sr_1_8?crid=DRVN9C656O4N&keywords=how+to+be+an+influential+leader&qid=1667247908&qu=eyJxc2MiOiItMC4wMCIsInFzYSI6IjAuMDAiLCJxc3AiOiIwLjAwIn0%3D&sprefix=how+to+be+an+influential+leader%2Caps%2C121&sr=8-8'><img src="./BookCover.png" style={{width: '65%'}}></img> </a>
                                         <a>Click &#x2191; to read my book on leadership</a>

                </div>
              </div>
            </nav>
        </Container>
    )
}
export default NavBar2;