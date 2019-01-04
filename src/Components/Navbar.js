import React from "react";
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink
} from "reactstrap";

export default class Example extends React.Component {
   constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false
      };
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }
   render() {
      return (
         <div>
            <Navbar color="light" light expand="md">
               <NavbarBrand href="/">I'm Tanapol</NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                     <NavItem>
                        <NavLink href="#">Education</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="#">Skills</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="#">Experiences</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="#">Contact</NavLink>
                     </NavItem>
                  </Nav>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}
