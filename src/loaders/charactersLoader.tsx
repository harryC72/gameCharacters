export const charactersLoader = async () => {
	const response = await fetch("http://localhost:3000/characters");
	return response.json();
};
