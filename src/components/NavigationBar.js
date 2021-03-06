import {useState} from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

function NavigationBar () {

  const [isOpen, setIsOpen] = useState(false);

    
    const toggle = () => {
        setIsOpen(isOpen => !isOpen)
    }

    return(
    <div>
        <Navbar color="dark" light expand="md">
        <Link to="/"><NavbarBrand style={{color:"white"}}>Sehranin</NavbarBrand></Link>
          <NavbarToggler onClick={toggle} ></NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                
                {/* checkout parties here / Home */}
              <NavItem>
              <NavLink tag={Link} to="/" style={{color:"white"}}>Home</NavLink>
              </NavItem>

              {/* Sign up*/}
              <NavItem>
                <NavLink tag={Link} to="/sign-up" style={{color:"white"}}>Signup</NavLink>
              </NavItem>

              {/* Login*/}
              <NavItem>
                <NavLink tag={Link} to="/log-in" style={{color:"white"}}>Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
    );
}

export default NavigationBar;

