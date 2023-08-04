import React from "react";
import { useLoaderData, Link } from "react-router-dom";

type Character = {
	id: string;
	name: string;
	race: string;
	location: string;
};

const Characters = () => {
	const characters = useLoaderData() as Character[];

	return (
		<div className="characters">
			{characters?.map((char: Character) => (
				<div style={{ border: "1px solid", padding: "8px", margin: "4px" }}>
					<Link to="/" key={char.id}>
						<p>{char.name}</p>
						<p>{char.race}</p>
						<p>Based in {char.location}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Characters;
