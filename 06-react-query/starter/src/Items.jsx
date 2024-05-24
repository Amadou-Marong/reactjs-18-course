import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = () => {
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const {data} = await customFetch.get('/something')
      return data
    }
  })
  
  if (isLoading) {
    return <div style={{marginTop: '50px'}}>
      <div style={{width: '30px', height: '30px'}} className="loading"></div>
    </div>
  }

  if (isError) {  
    return <p style={{marginTop: '1rem'}}>There was an error...</p>
  }
  console.log(isError);
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
