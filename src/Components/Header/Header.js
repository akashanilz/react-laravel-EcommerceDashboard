import React from 'react'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory()
    return (
        <div>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/">Home</Link>
     
      {localStorage.getItem('user-info') ? 
      <>
       <Link to="/addProducts">Add Products</Link>
        
         <Link to="/viewProducts">View Products</Link>
       <NavDropdown title={user.name} id="collasible-nav-dropdown">
       <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item onClick={()=>{
           localStorage.clear()
           history.push('/login')
       }} >Logout</NavDropdown.Item>

     </NavDropdown>
    
     </>
      :   
      <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </>
       }
    
    </Nav>
    </Container>
  </Navbar>
  <br />

        </div>
    )
}

export default Header
