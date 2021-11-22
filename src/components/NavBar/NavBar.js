import { Link } from 'react-router-dom'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../images/logo.png'
import './NavBar.scss'

export const NavBar = () => {
    return(
        <header>
            
            <Navbar bg="dark" className="navBar__text" variant="dark" expand="lg">
                <Container className="prueba">
                    <Navbar.Brand>
                    <Link to="/"><img loading="lazy" width="100" height="100" src={logo} alt="Logo Bariloche Outdoor"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link className="pe-5"><Link className="linkMenu" to="/">Inicio</Link></Nav.Link>
                            <NavDropdown className="pe-5 linkMenu" title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link className="linkSubmenu" to="/productos/Carpas">Carpas</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="linkSubmenu" to="/productos/Bolsas">Bolsas de dormir</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="linkSubmenu" to="/productos/Bicicletas">Bicis</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link className="linkSubmenu" to="/productos/Kayaks">Kayaks</Link></NavDropdown.Item>
                            </NavDropdown>
                            <CartWidget/>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Buscar"
                            />
                            <Button variant="outline-light">Buscar</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

