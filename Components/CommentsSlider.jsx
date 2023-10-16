import React from "react"
import Commentcard from "./Commentcard"


export default function CommentSlide({comments, average}){

    /*    <Commentcard comments = {comments[5]}/>
            <Commentcard comments = {comments[6]}/>
            <Commentcard comments = {comments[7]}/>
    */

    function sortComments(comments, average){
        //InsertionSort the array -> Change between good and bad reviews. 
        for(let i = 1; i < average.length - 1 ; i++){
            
            let key = average[i];
            let j = i - 1

            while (j >= 0 && average[j] > key ){
                average[j+1] = average[j];
                comments[j+1] = comments[j]; //Change for comments aswell. 
                j = j - 1;
            }
            average[j + 1] = key
        }

        return{
            comments, average
        }   
    }

    const sortedCommentsAndAverage = sortComments(comments, average)
    const sortedComments = sortedCommentsAndAverage.comments;
    const sortedAverage = sortedCommentsAndAverage.average;

            
       const firstFourFB =  
        comments[4] ? <div className="CardStack">        
            <Commentcard comments = {comments[0]} average = {average[0]}/>       
            <Commentcard comments = {comments[1]} average = {average[1]}/>
            <Commentcard comments = {comments[2]} average = {average[2]}/>
            <Commentcard comments = {comments[3]} average = {average[3]}/>
            <Commentcard comments = {comments[4]} average = {average[4]}/>
                   </div>
        : <h2>No comments yet!</h2>



        const bestFourFB = 
            comments[4] ? <div className="CardStack">
            <Commentcard comments = {sortedComments[sortedComments.length-1]}  average = {sortedAverage[sortedAverage.length-1]}/>       
            <Commentcard comments = {sortedComments[sortedComments.length-2]}  average = {sortedAverage[sortedAverage.length-2]}/>
            <Commentcard comments = {sortedComments[sortedComments.length-3]}  average = {sortedAverage[sortedAverage.length-3]}/>
            <Commentcard comments = {sortedComments[sortedComments.length-4]}  average = {sortedAverage[sortedAverage.length-4]}/>
            <Commentcard comments = {sortedComments[sortedComments.length-5]}  average = {sortedAverage[sortedAverage.length-5]}/>
                   </div>
        : <h2>No comments yet!</h2>


        const worstFourFB = 
        comments[4] ? <div className="CardStack">
            <Commentcard comments = {sortedComments[0]}  average = {sortedAverage[0]}/>       
            <Commentcard comments = {sortedComments[1]}  average = {sortedAverage[1]}/>
            <Commentcard comments = {sortedComments[2]}  average = {sortedAverage[2]}/>
            <Commentcard comments = {sortedComments[3]}  average = {sortedAverage[3]}/>
            <Commentcard comments = {sortedComments[4]}  average = {sortedAverage[4]}/>
                        </div>
        : <h2>No comments yet!</h2>

    return (
        <div>
            {bestFourFB}
        </div>
    )
}

0