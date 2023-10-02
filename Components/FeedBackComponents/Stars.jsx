import React from "react"
import {IoStarOutline, IoStar} from "react-icons/io5"



export default function Stars({numberOfStarsHover, handleRating, question, handleClickedStar, numberOfStarsClicked}){
        
       const displayStars = []

       for(let i = 1; i <= 5; i++){
            if(i <= numberOfStarsClicked || i <= numberOfStarsHover){
                displayStars.push(< IoStar size={30} color="#d1a316" 
                onMouseOver={() => handleRating(`${i}`,question)}
                onMouseLeave={() => handleRating("0",question)}
                onClick={() => handleClickedStar(i, question)}

            />) 
            }   
            else{
                displayStars.push(< IoStarOutline size={30} 
                    onMouseOver={() => handleRating(`${i}`, question)}
                    onMouseLeave={() => handleRating("0",question)}
                    onClick={() => handleClickedStar(i, question)}

            />)
            }
        }

    return(
        <div>
            {displayStars}
        </div>
    )
}

