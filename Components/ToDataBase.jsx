import React from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";



const appSettings = {
  databaseURL: "https://planetofmathfeedback-default-rtdb.europe-west1.firebasedatabase.app/"
};


const app = initializeApp(appSettings);
const database = getDatabase(app);


export default function ToDataBase({ ratingOverall, ratingNavigation, ratingMath, ratingTasks, comment }) {
  const FeedbackUser = {
    overall: ratingOverall.clickedStar,
    navigation: ratingNavigation.clickedStar,
    math: ratingMath.clickedStar,
    tasks: ratingTasks.clickedStar,
    comment: comment
  };

  async function SendToDataBase() {
    const Feedback = await ref(database, "FeedbackUsers");
    push(Feedback, FeedbackUser);
  }

  SendToDataBase();

  return null;
}

