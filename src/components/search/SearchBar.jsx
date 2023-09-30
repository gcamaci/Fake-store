import { useEffect,useState } from "react"
import { useDebounce } from "@uidotdev/usehooks"
import { useNavigate } from "react-router-dom";
import formatGameObjs from "../../utils/formatGames";

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm,1000);
    const [games, setGames] = useState([])
    const navigate = useNavigate()

    const getGameData = async (searchKey) => {
        try{
            const rawgResponse = await fetch(`https://api.rawg.io/api/games?key=e5c64a9c49864500a278d85516df2eac&search=${searchKey}&page_size=5`, {mode: 'cors'})
            const gameData = await rawgResponse.json()
            const searchResults = formatGameObjs(gameData.results)
            console.log(searchResults)
            setGames(searchResults)
        } catch (error){
            console.log(error)
        } finally{
            console.log('here you go')
        }
    }

    const searchChange = (e) => {
        setSearchTerm(e.target.value)
        setIsOpen(true)
        if(e.target.value === ""){
            setIsOpen(false)
        }
    }
    
    useEffect(()=> {
        if(debouncedSearch){
            getGameData(debouncedSearch)
        }
        setSearchTerm('')
    },[debouncedSearch])
    return (
        <div className="col-start-3 col-end-10 mx-5 flex justify-center relative flex-col">
            <div className="w-full relative">
                <input
                onChange={searchChange}
                type="search" 
                placeholder="Search Game Title"
                className="w-full p-2 text-black rounded-xl"
                />
            </div>
            {isOpen && 
                <div className="absolute top-full left-0 z-100 bg-primary w-full rounded border border-gray-300 flex flex-col gap-2">
                    {games.map((game)=> {
                        return (
                            <div className="m-2 flex items-center gap-2" 
                            key={game.id}
                            onClick={() => {
                                navigate(`/product/${game.id}/${game.price}`);
                                setIsOpen(false)
                            }}
                            >
                                <img src={game.image} className="w-[75px] h-[50px]"></img>
                                <p>{game.name}</p>

                            </div>
                        )
                    })}
                    
                </div>
            }
        </div> 
    )
}

export default SearchBar