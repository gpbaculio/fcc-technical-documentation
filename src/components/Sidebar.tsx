import React from 'react';

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <nav className='p-2'>
        <header>TypeScript Documentation</header>
        <ul className='list-unstyled pl-2'>
          <li className='options'>Installing TypeScript</li>
          <li className='options'>Building your first TypeScript file</li>
          <li className='options'>Compiling your code</li>
          <li className='options'>Type annotations</li>
          <li className='options'>Interfaces</li>
          <li className='options'>Classes</li>
          <li className='options'>Running your TypeScript web app</li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
