import { CLEAR_ITEMS, REMOVE_ITEM, RESET_ITEMS } from './actions';
import { useState, useReducer } from 'react';
import { data, people } from '../../../data';

const defaultState = {
  people: data,
  isLoading: false,
}


const reducer = (state, action) => {
  if(action.type === CLEAR_ITEMS) {
    return {...state, people: []}
  }
  if (action.type === RESET_ITEMS) {
    return {...state, people: data}
  }
  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter((person) => person.id !== action.payload)
    return {...state, people: newPeople}
  }
  // return state;
  throw new Error(`no matching ${action.type} action type`);
}

const ReducerBasics = () => {
  
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({type: REMOVE_ITEM, payload: id})
  };

  const clearItems = () => {
    // setPeople([])
    dispatch({type: CLEAR_ITEMS})
  }

  const reset = () => {
    // setPeople(data)
    dispatch({type: RESET_ITEMS})
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
