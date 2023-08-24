import { useState } from "react";

/* eslint-disable react/prop-types */
const Description = (props) => {
    const { desc, website, released, genres, publisher, platforms } = props.info;
    const [isOpen, setSwitch] = useState(false);
    console.log(publisher)
    const toggleSwitch = () => {
        setSwitch(!isOpen)
    }
    return (
        <div className="h-full flex flex-col gap-2">
            <div className="h-3/4 overflow-y-auto">
                <div>
                    <h1>Description</h1>
                    <p>{desc}</p>
                </div>
            </div>
            <div>
                {isOpen && (
                    <ul>
                        <li>Website: {website}</li>
                        <li>Released: {released}</li>
                        <li className="flex gap-2">
                            Genres:
                            {genres.map((genre)=> <p key={genre.name}>{genre.name}</p>)}
                        </li>
                        <li className="flex gap-2">
                            Platforms: 
                            {platforms.map((plat) => <p key={plat.platform.name}>{plat.platform.name}</p>)}
                        </li>
                        <li>
                            Publisher: {publisher.name}
                        </li>
                    </ul>
                )}
            </div>
            <div className="flex justify-end mx-2">
                <button onClick={toggleSwitch}>more</button>
            </div>
        </div>
        
    )
}

export default Description