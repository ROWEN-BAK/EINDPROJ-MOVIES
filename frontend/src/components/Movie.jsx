import React from 'react';


const Movie = ({title, review, genre, image}) => {
    return ( 
    
        <div
            
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition transform duration-200 cursor-pointer"
          >
          
            <img src={image} alt="" className="bg-gray-700 h-48 rounded-md mb-4 hover:opacity-80"/>
            <div className="h-5.5 bg-gray-600 rounded w-100 m-2">{title}</div>
            <div className="h-5.5 bg-gray-600 rounded w-100 m-2">{genre}</div>
            <div className="h-5.5 bg-gray-600 rounded w-100 m-2">{review}</div>
          </div>
     );
}


 
export default Movie;