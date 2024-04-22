import { data } from '../../../data'
import React from 'react';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  
  const removePerson = (id) => {
    // console.log(id);
    const newPeople = people.filter((person) => person.id !== id)

    setPeople(newPeople)
  }
  const clearAll = () => {
    setPeople([])
  }
  return (
    <div>
      {people.map((person) => {
        const {id, name} = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removePerson(id) }>remove</button>
          </div>
        )
      })}
      <button type='button' className='btn' style={{marginTop: '20px'}} onClick={clearAll} >Clear All</button>
    </div>
  )
};

export default UseStateArray;
