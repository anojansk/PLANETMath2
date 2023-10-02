import React from "react"
import {IoStar} from "react-icons/io5"
import { onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



export default function FromDataBase(){

    onValue(FeedbackUsers, function(snapshot) {
        let arrayWithFeedback = Object.values(snapshot.val())
        
    })


    return(
        <div>
       <div><IoStar size={50} color="gold"/><h1>4,5</h1></div>
       <div><IoStar size={50} color="gold" /><h1>4,8</h1></div>
       <div><IoStar size={50} color="gold" /><h1>4,9</h1></div>
       <div><IoStar size={50} color="gold" /><h1>5</h1></div>
       </div>
       
       
    )
}