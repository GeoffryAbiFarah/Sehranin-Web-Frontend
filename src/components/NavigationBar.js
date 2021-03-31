import {Component} from 'react';
import { Link } from 'react-router-dom';
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap';

class NavigationBar extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          isOpen: false
        }
    }
    
    toggle = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }))
    }

    render(){
        return(
        <div>
            <Navbar color="dark" light expand="md">
            <Link to="/"><NavbarBrand style={{color:"white"}}>Sehranin</NavbarBrand></Link>
              <NavbarToggler onClick={this.toggle} ></NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    
                    {/* checkout parties here / Home */}
                  <NavItem>
                  <NavLink tag={Link} to="/" style={{color:"white"}}>Home</NavLink>
                  </NavItem>

                  {/* post a party here */}
                  <NavItem>
                  <NavLink tag={Link} to="/post-a-party" style={{color:"white"}}>Post A Party</NavLink>
                  </NavItem>

                  {/* Sign up or login here */}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{color:"white"}} className="logged-in">
                      Signup
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                      <NavLink tag={Link} to="/sign-up">Sign Up</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                      <NavLink tag={Link} to="/log-in">Log in</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  {/* Check account info or logout here */}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{color:"white"}} className="logged-in">
                        My Account
                    </DropdownToggle>
                    <DropdownMenu right className="logged-in">
                      <DropdownItem>
                      <NavLink tag={Link} to="/my-account">My Account</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                      <NavLink tag={Link} to="/">Log out</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
            </div>
        );
    }
}

export default NavigationBar;

