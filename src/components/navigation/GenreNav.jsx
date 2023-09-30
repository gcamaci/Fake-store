import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faGun,
   faFlagCheckered,
   faChessRook,
   faDungeon,
   faHandFist,
   faShieldHalved,
   faPuzzlePiece,
   faGamepad,
   faFootball


  
  } from "@fortawesome/free-solid-svg-icons";


const GenreNav = () => {
    const [genres,setGenres] = useState([]);

    const iCons = {
      shooter: faGun,
      racing: faFlagCheckered,
      strategy: faChessRook,
      action: faShieldHalved,
      adventure: faDungeon,
      puzzle: faPuzzlePiece,
      arcade: faGamepad,
      fighting: faHandFist,
      sports: faFootball

    }
    const navigate = useNavigate()
    const getGenres = async () => {
        try {
          const data = await fetch('https://api.rawg.io/api/genres?key=e5c64a9c49864500a278d85516df2eac');
          const response = await data.json();
      
          // Check if the response has results
          if (response.results && response.results.length > 0) {
            const genreObjects = response.results.map(genre => ({ id: genre.id, name: genre.name,slug:genre.slug }));
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
        <div className="w-full"> 
          Genre
            <ul className="">
              {genres && 
                genres.map((genre) => {
                  if(Object.keys(iCons).includes(`${genre.slug}`)){
                    return (
                      <div onClick={()=> navigate(`/genre/${genre.id}`)} 
                      key={genre.id} 
                      className="flex gap-2 m-3 items-center hover:bg-secondary">
                        <FontAwesomeIcon className="bg-lite p-2 w-[25px] h-[25px] rounded-md" icon={iCons[genre.slug]}/>
                        <li >{genre.name}</li>
                      </div>
                    )
                  }
                }
              )}
            
            </ul>
        </div>
    )
}

export default GenreNav