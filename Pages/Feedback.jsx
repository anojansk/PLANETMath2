import React from "react"
import Stars from "../Components/FeedBackComponents/Stars"
import ToDataBase from "../Components/ToDataBase"
import FromDataBase from "../Components/FromDataBase"



export default function Feedback(){

    const [ratingOverall, setRatingOverall] = React.useState( {
        rating : "",
        clickedStar: "1" })
    const [ratingNavigation, setRatingNavigation] = React.useState({
        rating : "",
        clickedStar: "1" })
    const [ratingMath, setRatingMath] = React.useState({
        rating : "",
        clickedStar: "1" })
    const [ratingTasks, setRatingTasks] = React.useState({
        rating : "",
        clickedStar: "1" })

    const [comment, setComment] = React.useState("");
    const [pressedSubmit, setPressedSubmit] = React.useState(false)



    function handleRating(chosenRating, question){
        if(question == "Overall"){
            setRatingOverall({
                ...ratingOverall,
                rating : chosenRating
            })
        }
        else if(question == "Navigation"){
            setRatingNavigation({
                ...ratingNavigation,
                rating : chosenRating
            })
        }
        else if(question == "Math"){
            setRatingMath({
                ...ratingMath,
                rating : chosenRating
            })
        }
        else{
            setRatingTasks({
                ...ratingTasks,
                rating : chosenRating
            })
        }
    }

    function handleClickedStar(clickedStar, question){
        if(question == "Overall"){
            setRatingOverall({
                ...ratingOverall,
                clickedStar : clickedStar
            })
        }
        else if(question == "Navigation"){
            setRatingNavigation({
                ...ratingNavigation,
                clickedStar : clickedStar
            })
        }
        else if(question == "Math"){
            setRatingMath({
                ...ratingMath,
                clickedStar : clickedStar
            })
        }
        else{
            setRatingTasks({
                ...ratingTasks,
                clickedStar : clickedStar
            })
        }
    }

    function handleComment(event){
        setComment(event.target.value)
    }

    function handleSubmit(){
            setPressedSubmit(true)
        }
    


    return(
    <div className = "row" style={{maxHeight: "120%"}}>
        <div className="column">

        {
           !pressedSubmit ? 
            
        <form>
            <div style={{padding : "10%"}}>
            <h3>How was your overall experience with this website?</h3>
            <Stars 
                numberOfStarsHover = {ratingOverall.rating}
                handleRating = {handleRating}
                question={"Overall"}
                handleClickedStar={handleClickedStar}
                numberOfStarsClicked={ratingOverall.clickedStar}

            />

            <h3>How was your experience navigating through the website?</h3>
            <Stars 
                numberOfStarsHover = {ratingNavigation.rating}
                handleRating = {handleRating}
                question={"Navigation"} 
                handleClickedStar={handleClickedStar}
                numberOfStarsClicked={ratingNavigation.clickedStar}

            />

            <h3>How was the mathematics?</h3>
            <Stars 
                numberOfStarsHover = {ratingMath.rating}
                handleRating = {handleRating}
                question={"Math"}
                handleClickedStar={handleClickedStar}
                numberOfStarsClicked={ratingMath.clickedStar}

            />

            <h3>How was the tasks and their difficulties?</h3>
            <Stars 
                numberOfStarsHover = {ratingTasks.rating}
                handleRating = {handleRating}
                question={"Tasks"}
                handleClickedStar={handleClickedStar}
                numberOfStarsClicked={ratingTasks.clickedStar}
            />
                <h4>Any other comments?</h4>
                <textarea placeholder="Write your comments here"
                onChange={handleComment}
                style={{borderRadius: "3px", fontSize: "12px", padding:"10px", 
                width:"200px", height: "100px"}}></textarea>
                <br />
            <button onClick={handleSubmit} style={{marginTop: "20"}}>Submit</button>
        </div>
        </form>
        : 
        <div> 

        <ToDataBase 
            ratingOverall={ratingOverall}
            ratingNavigation={ratingNavigation}
            ratingMath={ratingMath}
            ratingTasks={ratingTasks}
            comment={comment}
        />
                 <div style={{padding: "40% 0" }}>
                    <h1>Thank you for the feedback</h1> 
                    <h2>Enjoy and learn more!</h2>
                </div>
        </div>
        }
        </div>
        
        <div className="column">
            <h3>Recieved from database</h3>
            <h4>Avarage of them all</h4>
            <FromDataBase />
            {comment} 

            <h3>See all feedbacks</h3>     
        </div>
    </div>
    
    )
}