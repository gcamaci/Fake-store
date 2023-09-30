/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
        <div className="flex h-full relative">
            <div onClick={advanceImage} className="absolute top-0 left-0 bg-img h-full w-[50px] flex items-center justify-center">
                <FontAwesomeIcon className="text-4xl" icon={faArrowLeft}/>
            </div>
            <div>
                <img className="h-full" src={imgs[currentImage].image}></img>
            </div>
            <div onClick={advanceImage} className="absolute top-0 right-0 bg-img h-full w-[50px] flex items-center justify-center">
                <FontAwesomeIcon className="text-4xl" icon={faArrowRight}/>
            </div>
        </div>
    )
}

export default ImgSlider