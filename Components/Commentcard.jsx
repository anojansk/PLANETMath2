import React from "react"
import { IoStar } from "react-icons/io5"

export default function Commentcard({comments, average}){


    return(
        <div className="commentCard" >
            {comments} <IoStar className="starComments"  color="#d1a316"/> {average} 
        </div>
    )
}



