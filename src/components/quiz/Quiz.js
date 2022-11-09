import React, { useEffect, useState } from "react";
import "./quiz.css";

function Quiz({ id, stepQuiz }) {
	const [quiz, setQuiz] = useState({
		question: "",
		answerOptions: [],
		submitted: false,
	});

	useEffect(() => {
		setQuiz({
			question: stepQuiz["questionText"],
			answerOptions: stepQuiz["answerOptions"].map((e) => ({
				...e,
				selected: false,
				isCorrect: e.isCorrect == "true" ? true : false,
			})),
		});
	}, [stepQuiz]);

	return (
		<div className="quiz" id={id}>
			<div className="question">
				<p>{quiz["question"]}</p>
			</div>

			<div className="options"></div>

			<div className="bottom"></div>
		</div>
	);
}

export default Quiz;
