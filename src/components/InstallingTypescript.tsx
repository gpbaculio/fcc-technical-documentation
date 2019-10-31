import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import CopyToClipBoard from './CopyToClipBoard';

const InstallingTypescript = () => {
  const installing_typescript_code = 'npm install -g typescript';
  return (
    <section id='installing_typescript'>
      <h2 className='main-option'>Installing TypeScript</h2>
      <div className='content'>
        <p>There are two main ways to get the TypeScript tools:</p>
        <ul>
          <li>Via npm (the Node.js package manager)</li>
          <li>By installing TypeScript’s Visual Studio plugins</li>
        </ul>
        <p>
          Visual Studio 2015 and Visual Studio 2013 Update 2 include TypeScript
          by default. If you didn’t install TypeScript with Visual Studio, you
          can still&nbsp;
          <a
            rel='noopener noreferrer'
            href='https://www.typescriptlang.org/#download-links'
            target='_blank'>
            download it.
          </a>
        </p>
        <p>For NPM users</p>
        <div className='npm-code'>
          <SyntaxHighlighter language='shell' style={okaidia}>
            {installing_typescript_code}
          </SyntaxHighlighter>
          <CopyToClipBoard text={installing_typescript_code} />
        </div>
      </div>
    </section>
  );
};

export default InstallingTypescript;
