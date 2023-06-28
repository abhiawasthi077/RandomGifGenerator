import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [gif , setgif]= useState('');
    const [loading , setloading] = useState('false');

    async function fetchdata(tag){
        setloading(true)
        
       const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url );
       const imageSource = data.data.images.downsized_large.url;
       setgif(imageSource);
       setloading(false)
    }

    useEffect(() => {
        fetchdata('car');
    },[])


    return{gif ,loading ,fetchdata};

}

export default useGif