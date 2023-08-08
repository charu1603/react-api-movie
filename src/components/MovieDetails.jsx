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
    <div className='bg-black h-[700px] flex flex-col justify-center items-center px-20'>
  <h1 className='text-white font-bold text-3xl p-4'>{show.name}</h1>
  <img src={show.image.medium}></img>

<h6 className='text-white text-center pt-8 font-bold text-3xl'>Genre: {show.genres}</h6>
  <p className='text-white text-xs text-center p-10 width-[70%]'>{show.summary}</p>
  <Link to={`/Ticket/${show.id}`}> <button className='bg-pink-400 p-2 rounded-sm '>Book ticket</button></Link>

    </div>
  );
};

export default MovieDetails;
