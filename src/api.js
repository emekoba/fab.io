import response from "./db.json";

async function getNextQuestion() {
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ ...response, success: true });
		}, 2000);
	});
}

export { getNextQuestion };
