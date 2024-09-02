import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        
        if(!response.ok){
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
      }
      catch (error) {
        // console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, [])

 
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>There was an error...</h2>
  }
  return (
    <div>
      <img src={user.avatar_url} alt={user.name} style={{width: '150px', borderRadius: '25px'}}/>
      <h2>{user.name}</h2>
      <h4>Works at {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  )
};
export default MultipleReturnsFetchData;
