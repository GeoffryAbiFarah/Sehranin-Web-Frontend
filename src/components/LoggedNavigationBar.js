import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { loggedOutAction } from '../actions/loggedAction';

function LoggedNavigationBar () {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    
    const toggle = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const onLogout = () => {
        dispatch(loggedOutAction());
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

              {/* post a party here */}
              <NavItem>
              <NavLink tag={Link} to="/post-a-party" style={{color:"white"}}>Post A Party</NavLink>
              </NavItem>

              {/* My account*/}
              <NavItem>
                <NavLink tag={Link} to="/my-account" style={{color:"white"}}>My Account</NavLink>
              </NavItem>

              {/* Logout*/}
              <NavItem>
                <NavLink tag={Link} to="/" style={{color:"white"}} onClick={onLogout}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
    );
}

export default LoggedNavigationBar;

