import Nav from 'react-bootstrap/Nav';

function NavDiv() {
    return (
        <Nav defaultActiveKey="/home" variant="pills"  className="flex-column">
            <Nav.Link href="/home">   Active   </Nav.Link>
            <Nav.Link eventKey="link-1">   Link    </Nav.Link>
            <Nav.Link eventKey="link-2">  Link2   </Nav.Link>
            <Nav.Link eventKey="disabled" disabled>   Disabled   </Nav.Link>
        </Nav>
    )
}
export default NavDiv;