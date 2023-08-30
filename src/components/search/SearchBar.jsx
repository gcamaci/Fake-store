import { useEffect,useState } from "react"
import { useDebounce } from "@uidotdev/usehooks"
//import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm,1000);
    const [games, setGames] = useState([])
    //const navigate = useNavigate()

    const getGameData = async (searchKey) => {
        try{
            const rawgResponse = await fetch(`//api.rawg.io/api/games?key=e5c64a9c49864500a278d85516df2eac&search=${searchKey}&page_size=5`)
            const gameData = await rawgResponse.json()
            const searchResults = gameData.results.map((game) => {
                return {
                    name:game.name,
                    id:game.id,
                    image: game.background_image
                }
            })
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
        console.log(e.target.value)
    }

    useEffect(()=> {
        if(debouncedSearch){
            getGameData(debouncedSearch)
        }
        setSearchTerm('')
    },[debouncedSearch])
    return (
        <div className="col-start-3 col-end-10 mx-5 flex justify-center relative flex-col">
            <div className="w-full">
                <input
                onChange={searchChange}
                type="search" 
                placeholder="Search Game Title"
                className="w-full p-2"
                />
            </div>
            {isOpen && 
                <div className="absolute bottom-0 z-50 bg-lite w-full">
                    
                </div>
            }
        </div>
    )
}

export default SearchBar