import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import "./quiz.css";
import Answer from "../answer/Answer";

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

	function onSubmit() {
		if (quiz["answerOptions"].filter((e) => e.selected).length === 3) {
			setQuiz({ ...quiz, submitted: true });
		}
	}

	function toggleOption(answer, selected) {
		if (!quiz["submitted"]) {
			if (
				!selected &&
				quiz["answerOptions"].filter((e) => e.selected).length < 3
			) {
				const revision = quiz["answerOptions"].map((e) =>
					e["answerText"] == answer ? { ...e, selected: !selected } : e
				);
				setQuiz({ ...quiz, answerOptions: revision });
			}
		}
	}

	return (
		<div className="quiz" id={id}>
			<div className="question">
				<p>
					{quiz["question"]} <span>*pick three to continue</span>
				</p>
			</div>

			<div className="options">
				{quiz["answerOptions"].map((e) => (
					<Answer
						key={e["answerText"]}
						text={e["answerText"]}
						isCorrect={e["isCorrect"]}
						toggleOption={toggleOption}
						submitted={quiz["submitted"]}
						selected={e["selected"]}
					/>
				))}
			</div>

			<div className="bottom">
				<Button onClick={onSubmit} />
			</div>
		</div>
	);
}

export default Quiz;
