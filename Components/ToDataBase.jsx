
import React from "react"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://planetofmathfeedback-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const FeedbackUser = {
    overall : ratingOverall.clickedStar,
    navigation : ratingNavigation.clickedStar,
    math : ratingMath.clickedStar,
    tasks : ratingTasks.clickedStar,
    comment : comment
}


export default function ToDataBase({ratingOverall, ratingNavigation, ratingMath, ratingTasks, comment}){

  
    const Feedback = ref(database, "FeedbackUsers")
   /* const NavigationRatingInDB = ref(database, "NavigationRating")
    const MathRatingInDB = ref(database, "MathRating")   
    const TasksRatingInDB = ref(database, "TasksRating")
    const commentInDB = ref(database,"Comments") */
  
      push(Feedback, FeedbackUser)

    /*ratingNavigation.rating != "0" && push(NavigationRatingInDB, ratingNavigation.rating)
    ratingMath.rating != "0" && push( MathRatingInDB , ratingMath.rating)
    ratingTasks.rating != "0" && push(TasksRatingInDB, ratingTasks.rating)
    comment != ""  && push(commentInDB, comment)*/



    return(
        <div>
        </div>
    )
    
}

export {app, database}


