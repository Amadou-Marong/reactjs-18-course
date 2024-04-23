import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>Short Circuit</h2>
      <h4>{text || 'default value'}</h4>
      {text && (<div>
        <h2> whatever return</h2>
        <h2>{name}</h2>
      </div>)}
      {!text && <h4>also works</h4>}

      <h2>Ternary Operator</h2>
      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
      {user ? (
          <div>
            <h4>hello there user {user.name}</h4>
          </div>
       ) : (
          <div>
            <h4>please login</h4>
          </div>
        )
      }

      {/* {!text && (<div>
        <h2>Whatever Returns</h2>
        <h2>{name}</h2>
      </div>)} */}

      {user && <SomeComponent name={user.name} />}

    </div>
  )
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className='btn'>log out</button>
    </div>
  );
};

export default ShortCircuitExamples;
