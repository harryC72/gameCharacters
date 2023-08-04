import { Outlet } from "react-router";

const CharactersLayout = () => {
	return (
		<div className="characters-layout">
			<h2>Characters</h2>

			<Outlet />
		</div>
	);
};

export default CharactersLayout;
