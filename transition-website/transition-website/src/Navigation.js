import Nav from 'react-bootstrap/Nav';
import SidebarMenu from 'react-bootstrap-sidebar-menu';



function NavDiv() {
    return (        
    <SidebarMenu>
       <SidebarMenu.Header>
        <SidebarMenu.Brand>
        <img src="./flag.png" className="img-responsive" alt="Image" style={{width: '100%'}} ></img>

        </SidebarMenu.Brand>
       </SidebarMenu.Header>
        <SidebarMenu.Toggle>
       <SidebarMenu.Body>
            <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link>
                    <SidebarMenu.Nav.Icon>
                        Nav Icon
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>
                        Nav Title
                    </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
       </SidebarMenu.Body>
       </SidebarMenu.Toggle>
    </SidebarMenu>
        
    )
}
export default NavDiv;