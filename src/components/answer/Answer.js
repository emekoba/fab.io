import React from "react";
import "./answer.css";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Answer({
	text,
	isCorrect,
	submitted,
	toggleOption,
	selected,
}) {
	return (
		<div className="answer">
			<button
				style={{
					borderBottom: `4px ${
						isCorrect && !selected && submitted ? "dotted" : "solid"
					} ${
						selected
							? submitted
								? isCorrect
									? "limegreen"
									: "red"
								: "#4caee3"
							: isCorrect && submitted
							? "limegreen"
							: "var(--accent)"
					}`,
				}}
				onClick={() => toggleOption(text, selected)}
			>
				<p>{text}</p>
			</button>

			{submitted && selected && (
				<>
					{isCorrect ? (
						<FaCheck size={"2vw"} color="limegreen" />
					) : (
						<MdClose size={"2.6vw"} color="red" />
					)}
				</>
			)}
		</div>
	);
}
