import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import CopyToClipBoard from './CopyToClipBoard';

import typescript_vscode from '../images/typescript_vscode.jpeg';

const Running = () => {
  const running_code = `<!DOCTYPE html>
<html>
  <head><title>TypeScript Greeter</title></head>
  <body>
    <script src="greeter.js"></script>
  </body>
</html>`;
  return (
    <section id='Running_your_TypeScript_web_app' className='main-section'>
      <header className='main-option'>Running your TypeScript web app</header>
      <div className='content'>
        <p>
          Now type the following in <mark>greeter.html</mark>:
        </p>
        <div className='running-code'>
          <SyntaxHighlighter language='html' style={okaidia}>
            {running_code}
          </SyntaxHighlighter>
          <CopyToClipBoard text={running_code} />
        </div>
        <ul></ul>
        <p>
          Open <mark>greeter.html</mark> in the browser to run your first simple
          TypeScript web application!
        </p>
        <p>
          Optional: Open <mark>greeter.ts</mark> in Visual Studio, or copy the
          code into the TypeScript playground. You can hover over identifiers to
          see their types. Notice that in some cases these types are inferred
          automatically for you. Re-type the last line, and see completion lists
          and parameter help based on the types of the DOM elements. Put your
          cursor on the reference to the greeter function, and hit F12 to go to
          its definition. Notice, too, that you can right-click on a symbol and
          use refactoring to rename it.
        </p>
        <p>
          The type information provided works together with the tools to work
          with JavaScript at application scale. For more examples of what’s
          possible in TypeScript, see the Samples section of the website.
        </p>
        <img className='ts-vscode' src={typescript_vscode} alt='' />
        <p className='mt-5'>
          Now that you're finished with this easy start, here are some
          considerations why you should use TypeScript according to&nbsp;
          <a
            target='_blank'
            href='https://dzone.com/articles/what-is-typescript-and-why-use-it'>
            dzone
          </a>
        </p>
        <ul>
          <li>
            TypeScript simplifies JavaScript code, making it easier to read and
            debug.
          </li>
          <li>TypeScript is open source.</li>
          <li>
            TypeScript provides highly productive development tools for
            JavaScript IDEs and practices, like static checking.
          </li>
          <li>TypeScript makes code easier to read and understand.</li>
          <li>
            With TypeScript, we can make a huge improvement over plain
            JavaScript.
          </li>
          <li>
            TypeScript gives us all the benefits of ES6 (ECMAScript 6), plus
            more productivity.
          </li>
          <li>
            TypeScript can help us to avoid painful bugs that developers
            commonly run into when writing JavaScript by type checking the code.
          </li>
          <li>Powerful type system, including generics.</li>
          <li>
            TypeScript is nothing but JavaScript with some additional features.
          </li>
          <li>Structural, rather than nominal.</li>
          <li>
            TypeScript code can be compiled as per ES5 and ES6 standards to
            support the latest browser.
          </li>
          <li>Aligned with ECMAScript for compatibility.</li>
          <li>Starts and ends with JavaScript.</li>
          <li>Supports static typing.</li>
          <li>TypeScript will save developers time.</li>
          <li>TypeScript is a superset of ES3, ES5, and ES6.</li>
        </ul>
      </div>
    </section>
  );
};

export default Running;
