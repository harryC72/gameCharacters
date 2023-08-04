import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className={"root-layout"}>
			<header>
				<nav>
					<h1>Game Characters</h1>
					<NavLink to="/">Home</NavLink>
					<NavLink to="about">About</NavLink>
					<NavLink to="characters">Characters</NavLink>
					<NavLink to="help">Help</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
