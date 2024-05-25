import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import customFetch from './utils';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const result = useMutation({
    mutationFn: () => customFetch.post('/', {title: 'some value'})
  })
  console.log(result);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
