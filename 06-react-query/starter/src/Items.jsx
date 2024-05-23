import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = () => {
  const {isLoading, data} = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/')
  })
  
  if (isLoading) {
    return <div style={{marginTop: '50px'}}>
      <div style={{width: '30px', height: '30px'}} className="loading"></div>
    </div>
  }
  
  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
