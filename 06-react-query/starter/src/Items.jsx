import SingleItem from './SingleItem';
import { useFetchTasks } from './reactQueryCustomHooks';

const Items = () => {
  
  const {isLoading, isError, data} = useFetchTasks()  
  if (isLoading) {
    return <div style={{marginTop: '50px'}}>
      <div style={{width: '30px', height: '30px'}} className="loading"></div>
    </div>
  }

  if (isError) {  
    return <p style={{marginTop: '1rem'}}>There was an error...</p>
  }
  
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
