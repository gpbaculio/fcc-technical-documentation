import React from 'react';
import InstallingTypescript from './InstallingTypescript';
import Building from './Building';
import Compiling from './Compiling';
import TypeAnnotations from './TypeAnnotations';
import Interfaces from './Interfaces';
import Running from './Running';
import Attribution from './Attribution';
import Classes from './Classes';

const MainContent = () => {
  return (
    <div className='p-3 overflow-auto'>
      <h1>TypeScript Documentation</h1>
      <div className='content'>
        <p>Get started with a simple TypeScript app.</p>
        <p>
          Let’s get started by building a simple web application with
          TypeScript.
        </p>
      </div>
      <InstallingTypescript />
      <Building />
      <Compiling />
      <TypeAnnotations />
      <Interfaces />
      <Classes />
      <Running />
      <Attribution />
    </div>
  );
};

export default MainContent;
