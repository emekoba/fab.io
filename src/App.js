import React, { useEffect, useState } from "react";
import "./App.css";
import { getNextQuestion } from "./api";

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

	return <div className="App"></div>;
}

export default App;
