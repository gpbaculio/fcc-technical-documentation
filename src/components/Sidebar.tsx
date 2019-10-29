import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Navbar,
  Collapse
} from 'reactstrap';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <section className='sidebar'>
      <Navbar color='faded' light expand='md'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav vertical navbar>
            <NavItem>
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                Github
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  );
};

export default Sidebar;
