import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('john');


  return (
    <div>
      <h4>FALSY OR   : {text || 'hello world'}</h4>
      <h4>FALSY AND  : {text && 'hello world'}</h4>
      <h4>TRUTHY OR  : {name || 'hello world'}</h4>
      <h4>TRUTHY AND : {name && 'hello world'}</h4>
    </div>
  )
};
export default ShortCircuitOverview;
