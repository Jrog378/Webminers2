import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Image from "next/image";
import logo from "@/images/WebLogo.webp";
import styles from '@/styles/Home.module.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/config";

export default function Pagenav() {
    const [user, loading] = useAuthState(auth)
    return (
        <Navbar className={styles.bignav} expand="lg" variant={"dark"}>
            <Container>
                <Navbar.Brand href='/' style={{color: 'rgb(0,175,75)', fontWeight: 'bold', fontSize: 'x-large'}}>
                    <Image width='34' height='34' className="d-inline-block align-top" src={logo} alt='Webminers Logo'/>Webminers
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='m-auto'>
                        <Nav.Link className={styles.webnav} href="/seasons">Seasons</Nav.Link>
                        <Nav.Link className={styles.webnav} href="/weightings">Weightings</Nav.Link>
                        <Nav.Link className={styles.webnav} href="/research">Research</Nav.Link>
                        <Nav.Link className={styles.webnav} href="/pricing">Pricing</Nav.Link>
                        <Nav.Link className={styles.webnav} href="/articles">Articles</Nav.Link>
                    </Nav>
                    {loading
                        ? <Nav><Nav.Link className={styles.webnav} href="">Loading...</Nav.Link></Nav>
                        : user
                            ?
                            <Nav>
                                <Nav.Link className={styles.webnav} href="/auth/profile">Profile</Nav.Link>
                                <Nav.Link className={styles.webnav} href="/auth/logout">Logout</Nav.Link>
                            </Nav>

                            :
                            <Nav>
                                <Nav.Link className={styles.webnav} href="/auth/login">Login</Nav.Link>
                                <Nav.Link className={styles.webnav} href="/auth/signup">Signup</Nav.Link>
                            </Nav>


                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}