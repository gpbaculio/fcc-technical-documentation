import React from 'react';

const Attribution = () => {
  return (
    <div className='attribution-container d-flex justify-content-center'>
      <div className='attribution small text-center'>
        <p>© Microsoft and other contributors</p>
        <p>Licensed under the Apache License, Version 2.0.</p>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.typescriptlang.org/docs/tutorial.html'>
          https://www.typescriptlang.org/docs/tutorial.html
        </a>
      </div>
    </div>
  );
};

export default Attribution;
