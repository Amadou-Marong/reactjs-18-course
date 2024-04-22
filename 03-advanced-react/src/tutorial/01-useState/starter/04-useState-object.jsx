import { useState } from 'react';

const UseStateObject = () => {
  // const [name, setName] = useState('Peter');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('Reading Story Books')

  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'Reading Story Books'
  })

  const changeUser = () => {
    // setName('Jhon');
    // setAge(27);
    // setHobby('Swimming')

    // setPerson({
    //   name: 'Jhon',
    //   age: 27,
    //   hobby: 'Swimming',
    // })
    
    setPerson({...person, name: 'Jhon'})
  }

  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h4>Hobby: {person.hobby}</h4>
      <button className='btn' onClick={changeUser}>Show Jhon</button>
    </>
  )
};

export default UseStateObject;
