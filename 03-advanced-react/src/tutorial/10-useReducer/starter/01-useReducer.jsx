import React from 'react';
import { data } from '../../../data';
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearItems = () => {
    setPeople([])
  }

  const reset = () => {
    setPeople(data)
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={reset}
        >
          Reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearItems}
        >
          clear items
        </button>
      )
      }
    </div>
  );
};

export default ReducerBasics;
