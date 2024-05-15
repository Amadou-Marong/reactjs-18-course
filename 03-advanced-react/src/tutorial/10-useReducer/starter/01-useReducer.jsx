import { useState, useReducer } from 'react';
import { data, people } from '../../../data';

const defaultState = {
  people: data,
  isLoading: false,
}


const RESET_ITEMS = 'RESET_ITEMS';
const CLEAR_ITEMS = 'CLEAR_ITEMS';
const REMOVE_ITEM = 'REMOVE_ITEM';

const reducer = (state, action) => {
  if(action.type === CLEAR_ITEMS) {
    return {...state, people: []}
  }
  // return state;
  throw new Error(`no matching ${action.type} action type`);
}

const ReducerBasics = () => {
  
  const [state, dispatch] = useReducer(reducer, defaultState)

  console.log(state);



  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearItems = () => {
    // setPeople([])
    dispatch({type: CLEAR_ITEMS})
  }

  const reset = () => {
    // setPeople(data)
    dispatch({type: RESET_LIST})
  }
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
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
