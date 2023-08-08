import React from 'react';
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Ticket = () => {




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

  const handleSubmit = event => {
    event.preventDefault();
  
  };
  if (!show) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='bg-black flex flex-col justify-center items-center h-screen p-24 '>
      <h1 className='text-5xl font-bold text-white p-4'>Book Tickets for Movie ID: {show.id}</h1>
      <h5 className='text-4xl font-bold text-white p-4'>Movie name: {show.name}</h5>
      <h5 className='text-2xl font-bold text-white p-4'>Movie timing: 5 A.M to 8 A.M</h5>
      <h5 className='text-2xl font-bold text-white p-4'>No. Of seats: 2</h5>

      <form onSubmit={handleSubmit}>
       
        <button className='bg-pink-400 p-2 m-4 rounded-sm' type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default Ticket;
