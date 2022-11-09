import React, { useEffect, useState } from "react";
import "./App.css";
import { getNextQuestion } from "./api";
import Quiz from "./components/quiz/Quiz";

function App() {
	const [lesson, setLesson] = useState({
		steps: [],
		currentStep: 0,
	});

	useEffect(() => {
		getNextQuestion().then((res) => {
			let initSteps = [];

			if (res.success) {
				Object.keys(res.data).map((k, v) => {
					initSteps.push(res.data[k]);
				});
				setLesson({ ...lesson, steps: initSteps });
			}
		});
	}, []);

	return (
		<div className="App">
			{lesson.steps.length != 0 && lesson.steps[lesson.currentStep] ? (
				<Quiz
					key={lesson.steps[lesson.currentStep]["id"]}
					id={lesson.steps[lesson.currentStep]["id"]}
					stepQuiz={lesson.steps[lesson.currentStep]["stepQuiz"]}
				/>
			) : (
				<div>loading</div>
			)}
		</div>
	);
}

export default App;
