import { useEffect } from 'react';
import AuthFetch from '../axios/custom';
import axios from 'axios';
const randomUserUrl = 'https://randomuser.me/api';


const CustomInstance = () => {
  const fetchData = async () => {
    try{
      const resp1 = await AuthFetch('/react-store-products')
      console.log(resp1);
      const resp2 = await axios(randomUserUrl)
      console.log(resp2);
    }catch(error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
