import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import CopyToClipBoard from './CopyToClipBoard';

const Building = () => {
  const building_code = `function greeter(person) {
  return "Hello, " + person;
}

var user = "Jane User";
  
document.body.innerHTML = greeter(user);`;
  return (
    <section id='building_your_first_typeScript_file'>
      <h2 className='main-option'>Building your first TypeScript file</h2>
      <div className='content'>
        <p>In your editor, type the following JavaScript code in greeter.ts:</p>
        <div className='building-code'>
          <SyntaxHighlighter language='javascript' style={okaidia}>
            {building_code}
          </SyntaxHighlighter>
          <CopyToClipBoard text={building_code} />
        </div>
      </div>
    </section>
  );
};

export default Building;
