import React from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from  "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {IoStar} from "react-icons/io5"



const appSettings = {
    databaseURL: "https://planetofmathfeedback-default-rtdb.europe-west1.firebasedatabase.app/"
  };


const app = initializeApp(appSettings);
const database = getDatabase(app);
const reviewsInDB = ref(database, "FeedbackUsers")

export default function FromDataBase(){
    const [feedbackRatings, setFeedbackRatings] = React.useState({
        ratingOverall : {
            totalScore : 4.8,
            totalRated : 0
            },  
        ratingNavigation : {
            totalScore : 3.6,
            totalRated : 0
            }, 
        ratingMath :  {
            totalScore : 4.2,
            totalRated : 0
            },
        ratingTasks : {
            totalScore : 3.7,
            totalRated : 0
            },
        comments : ["First Comment", "Second comment"]
    })


const arrayWithReviews = onValue(reviewsInDB, function(snapshot){
    return Object.entries(snapshot.val())
})



/**function addFeedBackToState(){
    arrayWithReviews.forEach((element) => {
        const elOverall = element.ratingOverall;
        const elNav = element.ratingNavigation;
        const elMath = element.ratingMath;
        const elTask = element.ratingTasks;
        const elComment = element.comment;
    
    setFeedbackRatings(prevObject => ({       
        prevObject.ratingOverall : {
            prevObject.ratingOverall.totalScore += elOverall,
            prevObject.ratingOverall.totalScore += 1
        },
        prevObject.ratingNavigation : {
            prevObject.ratingNavigation.totalScore += elNav,
            prevObject.ratingNavigation.totalRated += 1
        },
        prevObject.ratingMath : {
            prevObject.ratingMath.totalScore += elMath,
            prevObject.ratingMath.totalRated += 1
        },
    prevObject.ratingTasks : {
        prevObject.ratingTasks.totalScore += elTask,
        prevObject.ratingTasks.totalRated += 1
        },
        comments : comment ? comments.push(elComment) : comments
    }))
    })
} */

   const displayComments = feedbackRatings.comments.map((item) =>{
       return <h2>{item}</h2>
    })

    return(
        <div>
            <p>let something = Object.entries(objects)</p>
            <h2>Average ratings from users</h2>
            <div className="AverageFromDatabase">
                <div className="averageOR"><IoStar color="#d1a316" size={70}/> <h2>{feedbackRatings.ratingOverall.totalScore}</h2></div>
                <div className="averageNAV"><IoStar color="#d1a316" size={70}/> <h2>{feedbackRatings.ratingNavigation.totalScore}</h2></div>
                <div className="averageMath"><IoStar color="#d1a316" size={70}/> <h2>{feedbackRatings.ratingMath.totalScore}</h2></div>
                <div className="averageTasks"><IoStar color="#d1a316" size={70}/> <h2>{feedbackRatings.ratingTasks.totalScore}</h2></div>
           </div>
           {displayComments}
       </div>
       
       
    )
}


