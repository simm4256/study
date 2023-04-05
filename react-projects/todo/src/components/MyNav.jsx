import { Navbar, Container } from 'react-bootstrap'

export default function MyNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TODO</Navbar.Brand>
            </Container>
        </Navbar>
    )
}