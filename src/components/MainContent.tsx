import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import { Button } from 'reactstrap';
import CopyToClipBoard from './CopyToClipBoard';

const MainContent = () => {
  const building_code = `function greeter(person) {
  return "Hello, " + person;
}

var user = "Jane User";
  
document.body.innerHTML = greeter(user);`;
  return (
    <div className='flex-grow-1 p-3 overflow-auto'>
      <h1>TypeScript Documentation</h1>
      <div className='content'>
        <p>Get started with a simple TypeScript app.</p>
        <p>
          Let’s get started by building a simple web application with
          TypeScript.
        </p>
      </div>
      <section id='installing-typescript'>
        <h2 className='main-option'>Installing TypeScript</h2>
        <div className='content'>
          <p>There are two main ways to get the TypeScript tools:</p>
          <ul>
            <li>Via npm (the Node.js package manager)</li>
            <li>By installing TypeScript’s Visual Studio plugins</li>
          </ul>
          <p>
            Visual Studio 2015 and Visual Studio 2013 Update 2 include
            TypeScript by default. If you didn’t install TypeScript with Visual
            Studio, you can still&nbsp;
            <a
              href='https://www.typescriptlang.org/#download-links'
              target='_blank'>
              download it.
            </a>
          </p>
          <p>For NPM users</p>
          <div className='npm-code'>
            <SyntaxHighlighter language='shell' style={prism}>
              {'npm install -g typescript'}
            </SyntaxHighlighter>
            <CopyToClipBoard text={'npm install -g typescript'} />
          </div>
        </div>
      </section>
      <section id='building'>
        <h2 className='main-option'>Building your first TypeScript file</h2>
        <div className='content'>
          <p>
            In your editor, type the following JavaScript code in greeter.ts:
          </p>
          <div className='building-code'>
            <SyntaxHighlighter language='jsx' style={prism}>
              {building_code}
            </SyntaxHighlighter>
            <CopyToClipBoard text={building_code} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
