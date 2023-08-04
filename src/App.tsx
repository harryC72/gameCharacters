import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import CharactersLayout from "./layouts/CharactersLayout";
import Characters from "./pages/Characters";
import NotFound from "./pages/NotFound";
import { charactersLoader } from "./loaders/charactersLoader";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="characters" element={<CharactersLayout />}>
				<Route index element={<Characters />} loader={charactersLoader} />
			</Route>

			<Route path="help" element={<HelpLayout />}>
				<Route path="faq" element={<Faq />} />
				<Route path="contact" element={<Contact />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
