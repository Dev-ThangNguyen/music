
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Button, Form, FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import style from '../partial/Header.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


function Header () {
    return (
        <Navbar className={style.Navbar} variant='dark' expand="xl" fixed='top'>
            <Container >
            {/* <Navbar.Brand href="#">
                <img style={{width: 150}} src='https://lofi.co/static/media/logo.0cbf9e63.gif'/>
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <NavLink className={style.NavLink} to='/music'>Chill Coffee</NavLink>
                    <NavLink className={style.NavLink} to='/todo'>Todo</NavLink>
                    {/* <NavLink className={style.NavLink} to='/page2'>Page-2</NavLink>
                    <NavLink className={style.NavLink} to='/page3'>Page-3</NavLink> */}
                </Nav>
                <Button variant="outline-warning">Login</Button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header