import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import bg from '../Img/Flexboy.png';
import {Link} from 'react-router-dom';
import MovieDetails from './MovieDetails';

const Home = () => {
    const [shows, setShows] = useState([]);
    const fetchimages = () =>{
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then(res=> res.json())
      .then(data=>{
       setShows(data);
        console.log(data.show);
      
      })
    }
    useEffect(() => {
        fetchimages();
    }, []);

  

    return (
      <div className='bg-black p-24'>
        <h1 className='text-white text-7xl font-bold text-center'>Movies</h1>
        <div className="list flex flex-wrap  gap-6 p-10">
           {shows.map(show => (
          
         <>  <div key={show.show.id} className="p-4">

              <Link to={`/show/${show.show.id}`}>    <img
                src={show.show.image ? show.show.image.medium : {bg}}
                alt={`${show.show.name} poster`}></img>

                <h1 className='text-white font-bold text-center p-4'>{show.show.name}</h1></Link>
           </div>
      </>  ))}
         
        </div>
      </div>
    );

          }

          




        

      

        export default Home