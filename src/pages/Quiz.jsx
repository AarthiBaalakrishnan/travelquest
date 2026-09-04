import { useState } from "react";
import cities from "../data/cities";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/button";

function Quiz() {

    //get cityId and placeId
    const {cityId, placeId} = useParams();

   //
   const navigate = useNavigate();
    
    //getting the current question
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [selectedAnswer, setSelectedAnswer] = useState("");

    //Display the answer is correct or not
    const [result, setResult] = useState("");

    //Calculate score. set initial score as 0
    const [score, setScore] = useState(0);

    //find the city
    const city = cities.find(
        (city) => city.id === Number(cityId)
    );

    //find places
    const place = city.places.find(
        (place) => place.id === Number(placeId)
    );

    //get questions from place
    const questions = place.questions;
    const currentQuestion = questions[currentQuestionIndex];

    function handleAnswer(option) {
        setSelectedAnswer(option);
        if (option === currentQuestion.correctAnswer) {
            setResult("Correct Answer");
            setScore(score + 1);
        } else {
            setResult("Wrong Answer");
        }
    }

    //move to next question
    function handleNextQuestion() {
        if(currentQuestionIndex === questions.length - 1) {
            const finalScore = score;
            
            navigate("/results", {
                state: {
            score: finalScore,
            total: questions.length,
            place: place.name
        }

    });
    return;
}

setCurrentQuestionIndex(currentQuestionIndex + 1);
setSelectedAnswer("");
setResult("");
} 
    

    return (
        <main>
            <h2> {place.name}Quiz</h2>
            <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
            <h3>{currentQuestion.question}</h3>

            <div>
            {currentQuestion.options.map((option) => (
                <Button 
                key={option}
                onClick={() => handleAnswer(option)}   
                >
                    {option}
                </Button>
            ))}

            </div>
            <p>{result}</p>

            {selectedAnswer !== "" && (
                <Button
                onClick={handleNextQuestion}>
                    {currentQuestionIndex === questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question"}
                </Button>
            )}
        </main>
    );
}
export default Quiz;

