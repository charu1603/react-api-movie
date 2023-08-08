import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';


const MovieDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    
useEffect(() => {
       
        axios.get(`https://api.tvmaze.com/shows/${id}`)  
      .then(response => {
        setShow(response.data);
        console.log(response.data); 
      })
      .catch(error => {
        console.error('Error fetching show details:', error);
      });
  }, [id]);
  
  if (!show) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='bg-black w-[100%] h-screen flex justify-center items-center px-20'>
        <div className='w-[50%]'>
 <img className="w-[60%] h-[60%]" src={show.image.medium}></img>
        </div>
        <div className='w-[50%] flex flex-col'>
 <h1 className='text-white font-bold text-3xl'>{show.name}</h1>
 <h6 className='text-white  pt-8 font-bold text-3xl'>Genre: {show.genres}</h6>
 <h6 className='text-white  pt-8 font-bold text-3xl'>Genre: {show.language}</h6>
  <p className='text-white text-xs py-8  width-[70%]'>{show.summary}</p>
  <Link to={`/Ticket/${show.id}`}> <button className='bg-pink-400 p-2 rounded-sm '>Book ticket</button></Link>
        </div>
 
 



    </div>
  );
};

export default MovieDetails;
