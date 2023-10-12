import React from "react"
import Commentcard from "./Commentcard"


export default function CommentSlide({comments}){

       const firstSevenFB =  
        <div class="CardStack">        
            <Commentcard comments = {comments[0]}/>       
            <Commentcard comments = {comments[1]}/>
            <Commentcard comments = {comments[2]}/>
            <Commentcard comments = {comments[3]}/>
            <Commentcard comments = {comments[4]}/>
            <Commentcard comments = {comments[5]}/>
            <Commentcard comments = {comments[6]}/>
            <Commentcard comments = {comments[7]}/>
            </div>


    return (
        <div>
            {firstSevenFB}
        </div>
    )
}

