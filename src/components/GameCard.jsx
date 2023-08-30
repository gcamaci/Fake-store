/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faXbox, 
    faPlaystation,
    faWindows,
    faApple     
} from '@fortawesome/free-brands-svg-icons'


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
    
    return (
        <div onClick={() => navigate(`/product/${id}/${price}`)} className='flex flex-col h-[350px] cursor-pointer hover:opacity-70 bg-lite text-primary rounded-xl'>
            <div>
                <img className='h-[250px] w-full rounded-t-xl' src={image}></img>
            </div>
            <div className='grow flex flex-col justify-around rounded-sm'>
                <div className='flex justify-between mx-2'>
                    <div>
                        Add to Cart
                    </div>
                    <div>
                        <p>{`$${price}`}</p>
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap mx-2'>
                    {iconArray.map((iconUrl)=> {
                        if(iconUrl){
                            return <FontAwesomeIcon key={Math.random()} icon={iconUrl}/>
                        }
                    })}
                </div>
                <h1 className='mx-2'>{name}</h1>        
            </div>
        </div>
    )
}

export default GameCard