import React, { useEffect, useState } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { IoStar } from "react-icons/io5";
import CommentSlide from "./CommentsSlider";

const appSettings = {
  databaseURL: "https://planetofmathfeedback-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const reviewsInDB = ref(database, "FeedbackUsers");

export default function FromDataBase() {
  const [feedbackRatings, setFeedbackRatings] = useState({
    ratingOverall: {
      totalScore: 0
    },
    ratingNavigation: {
      totalScore: 0
    },
    ratingMath: {
      totalScore: 0
    },
    ratingTasks: {
      totalScore: 0
    },
    commentsAndAverage: {
      comment : [],
      average : []
    }
  });


  function ClearRatings(){

    setFeedbackRatings({

        ratingOverall : {
            totalScore: 0
        },
        ratingNavigation: {
            totalScore: 0
        },
        ratingMath: {
            totalScore: 0
        },
        ratingTasks: {
            totalScore: 0
        },
        commentsAndAverage: {
          comment : [],
          average : []
        }        
      })
    }
  const [totalRated, setTotalRated] = useState(0)



  useEffect(() => {
    const updateFeedbackRatings = (currentFeedback) => {

      setFeedbackRatings((prevState) => ({
        ratingOverall: {
         // totalRated: prevState.ratingOverall.totalRated + 1,
          totalScore: (prevState.ratingOverall.totalScore + parseInt(currentFeedback.overall))
        },
        ratingNavigation: {
            //totalRated: prevState.ratingNavigation.totalRated + 1,
            totalScore:(prevState.ratingNavigation.totalScore + parseInt(currentFeedback.navigation))
        },
        ratingMath: {
         // totalRated: prevState.ratingMath.totalRated + 1,
          totalScore:(prevState.ratingMath.totalScore + parseInt(currentFeedback.math))
        },
        ratingTasks: {
         // totalRated: prevState.ratingTasks.totalRated + 1,
          totalScore: (prevState.ratingTasks.totalScore + parseInt(currentFeedback.tasks))
          
        },
        commentsAndAverage: {
          comment : [...prevState.commentsAndAverage.comment, currentFeedback.comment],
          average : [...prevState.commentsAndAverage.average, Math.round(((currentFeedback.overall + currentFeedback.navigation + currentFeedback.math + currentFeedback.tasks )/4)*10)/10]
        } 
      }));
    };

   
    onValue(reviewsInDB, (snapshot) => {
      const arrayWithFeedback = Object.entries(snapshot.val());
       ClearRatings()
      
      setTotalRated(arrayWithFeedback.length)
      // Clearing the ratings should only be done if you want to reset the ratings with new data.
      // If you want to keep cumulative ratings, don't clear them here.

      for (let i = 0; i < arrayWithFeedback.length; i++) {
        let currentFeedback = arrayWithFeedback[i][1]; // Access the feedback object
        updateFeedbackRatings(currentFeedback);
      }
  });
  }, []); // Empty dependency array ensures the effect runs only once


  //console.log(feedbackRatings.ratingOverall.totalRated)
  //console.log(totalRated)
  
    return (
    <div style={{marginTop : "80px"}}>
      <h2>Average ratings from users</h2>
      <div className="AverageFromDatabase">
          <div className="averageOR"> <h4>Overall</h4><IoStar color="#d1a316" size={70}/> <h2>{Math.round(((feedbackRatings.ratingOverall.totalScore)/totalRated)*10)/10}</h2></div>
          <div className="averageNAV"><h4>Navigation</h4><IoStar color="#d1a316" size={70}/> <h2>{Math.round(((feedbackRatings.ratingNavigation.totalScore)/totalRated)*10)/10}</h2></div>
          <div className="averageMath"><h4>Mathematics</h4><IoStar color="#d1a316" size={70}/> <h2>{Math.round(((feedbackRatings.ratingMath.totalScore)/totalRated)*10)/10}</h2></div>
          <div className="averageTasks"><h4>Tasks</h4><IoStar color="#d1a316" size={70}/> <h2>{Math.round(((feedbackRatings.ratingTasks.totalScore)/totalRated)*10)/10}</h2></div>
      </div>
      <div className="Comments"><CommentSlide comments = {feedbackRatings.commentsAndAverage.comment} 
                                              average = {feedbackRatings.commentsAndAverage.average} /></div>
    </div>

    );
}
