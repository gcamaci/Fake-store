/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
const ImgSlider = (props) => {
    const { imgs } = props;
    const [currentImage, setImage] = useState(0)
    console.log(imgs)
    const advanceImage = () => {
        setImage((prevImg)=> (prevImg + 1) % imgs.length)
    }
    const previousImage = () => {
        setImage((prevImg)=> (prevImg -1 + imgs.length) % imgs.length)
    }
    return (
        <div className="flex h-full">
            <div>
                <button onClick={previousImage}>-</button>
            </div>
            <div>
                <img className="h-full" src={imgs[currentImage].image}></img>
            </div>
            <div>
                <button onClick={advanceImage}>+</button>
            </div>
        </div>
    )
}

export default ImgSlider