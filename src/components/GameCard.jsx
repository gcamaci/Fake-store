/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXbox, faPlaystation,faWindows,faApple } from '@fortawesome/free-brands-svg-icons'


const GameCard = (props) => {
    const { name, price, image, id, platforms } = props;
    const navigate = useNavigate()
    const icons = {
        playstation: faPlaystation,
        xbox: faXbox,
        pc: faWindows,
        mac: faApple,
    }
    const iconArray = platforms.map((plat) => {
        if(Object.keys(icons).includes(`${plat.platform.slug}`)) {
            return icons[`${plat.platform.slug}`]
        }
    })
    console.log(iconArray)
    return (
        <div onClick={() => navigate(`/product/${id}`)} className='flex flex-col h-[350px] cursor-pointer hover:opacity-70'>
            <div>
                <img className='h-[250px] w-full' src={image}></img>
            </div>
            <div className='grow flex flex-col justify-around'>
                <div className='flex justify-between'>
                    <div>
                        Add to Cart
                    </div>
                    <div>
                        <p>{`$${price}`}</p>
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    {iconArray.map((iconUrl)=> {
                        if(iconUrl){
                            return <FontAwesomeIcon key={Math.random()} icon={iconUrl}/>
                        }
                    })}
                </div>
                <h1>{name}</h1>        
            </div>
        </div>
    )
}

export default GameCard