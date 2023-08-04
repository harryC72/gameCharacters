import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<div>Page not found!</div>
			<p>
				Go to <Link to="">Homepage</Link>
			</p>
		</div>
	);
};

export default NotFound;
