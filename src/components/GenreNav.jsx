import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GenreNav = () => {
    const [genres,setGenres] = useState([]);
    const navigate = useNavigate()
    const getGenres = async () => {
        try {
          const data = await fetch('https://api.rawg.io/api/genres?key=e5c64a9c49864500a278d85516df2eac');
          const response = await data.json();
      
          // Check if the response has results
          if (response.results && response.results.length > 0) {
            const genreObjects = response.results.map(genre => ({ id: genre.id, name: genre.name }));
            console.log(genreObjects);
            setGenres(genreObjects)
          } else {
            console.log('No genres found in the response.');
          }
        } catch (error) {
          console.error('Error fetching genres:', error);
        }
    }

    useEffect(() => {
        getGenres()
    },[])
    return (
        <div>
            <ul>
                {genres && 
                genres.map((genre)=> <li key={genre.id} >{genre.name}</li>)
                
                
                }
            </ul>
        </div>
    )
}

export default GenreNav