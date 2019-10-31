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
    <section id='running'>
      <h2 className='main-option'>Running your TypeScript web app</h2>
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
        <img src={typescript_vscode} alt='' />
      </div>
    </section>
  );
};

export default Running;
