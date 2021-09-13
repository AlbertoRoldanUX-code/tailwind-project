import React from 'react';

function Component2() {
  return (
    <div className='container p-4'>
      <TailWindCSSButton>Tailwind Button</TailWindCSSButton>
    </div>
  );
}

function TailWindCSSButton(props) {
  return (
    <button className='bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600'>
      {props.children}
    </button>
  );
}

export default Component2;
