import React from "react";
import "./button.css";

export default function Button({ onClick }) {
	return (
		<button className="button" onClick={onClick}>
			submit
		</button>
	);
}
