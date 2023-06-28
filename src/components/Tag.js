import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

    const [tag , settag] = useState('');

    // const [gif , setgif]= useState('');
    // const [loading , setloading] = useState('false');

    // async function fetchdata(){
    //     setloading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //    const {data} = await axios.get(url);
    //    const imageSource = data.data.images.downsized_large.url;
    //    setgif(imageSource);
    //    setloading(false)
    // }

    // useEffect(() => {
    //     fetchdata();
    // },[])

    const {gif , loading , fetchdata} = useGif(tag)

    // function clickhandler(){
    //     console.log('onclick genrate');
    //   fetchdata();
    // }

    // function changehandler(event){
    //     settag(event.target.value)
    // }
    //DAva2qht0neDtMDysV3ovd70mkVzZ3f4

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-4 mt-4 pr-2 pl-2'>

         <h1 className='text-2xl mt-2 underline uppercase font-bold'>Random {tag} gif</h1>

         {
            loading ? (<Spinner/>):(<img src={gif}  width="450px" height="450px" className='ml-2 mr-2'/>)
         }

         <input 
         onChange={(event)=>settag(event.target.value)}
         type="text" value={tag}
         className='w-10/12 mb-3 text-center bg-white text-lg p-2 rounded-lg border border-black font-semibold'/>

         
         
         <button onClick={()=> fetchdata(tag)}
         className='w-10/12 mb-3 bg-white text-lg p-2 rounded-lg border border-black font-semibold'>

            Genrate
            
         </button>
    </div>
  )
}

export default Tag