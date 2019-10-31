import * as React from 'react';
const { useState } = React;

const CopyButton = ({ text }: { text: string }) => {
  const init_val = 'Copy';
  const [btn_val, set_value] = useState(init_val);
  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.textContent = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    set_value('Copied!');
    setTimeout(() => {
      set_value(init_val);
    }, 1500);
  };

  return (
    <button className='copy-to-clipboard' onClick={copyToClipboard}>
      {btn_val}
    </button>
  );
};

export default CopyButton;
