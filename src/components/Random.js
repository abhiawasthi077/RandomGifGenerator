import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

    // const [gif , setgif]= useState('');
    // const [loading , setloading] = useState('false');

    // async function fetchdata(){
    //     setloading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //    const {data} = await axios.get(url);
    //    const imageSource = data.data.images.downsized_large.url;
    //    setgif(imageSource);
    //    setloading(false)
    // }

    // useEffect(() => {
    //     fetchdata();
    // },[])

    const {gif , loading , fetchdata} = useGif();

    // function clickhandler(){
    //   fetchdata();
    // }
    //DAva2qht0neDtMDysV3ovd70mkVzZ3f4

  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-4 mt-4 pr-2 pl-2'>

         <h1 className='text-2xl mt-2 underline uppercase font-bold'>a Random gif</h1>

         {
            loading ? (<Spinner/>):(<img src={gif}  width="450px" height="450px" className='ml-2 mr-2'/>)
         }

         
         
         <button onClick={()=> fetchdata() }
         className='w-10/12 mb-3 bg-white text-lg p-2 rounded-lg border border-black font-semibold'>

            Genrate
            
         </button>
    </div>
  )
}

export default Random