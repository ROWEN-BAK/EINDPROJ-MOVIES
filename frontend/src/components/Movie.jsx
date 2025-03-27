const Movie = ({title, review, genre, image}) => {
    return ( 
        <section>
            <img src={image} alt={title} />
           <h2>{title}</h2>
           <h3>{genre}</h3>
           <h3>{review}</h3>
        </section>
     );
}
 
export default Movie;