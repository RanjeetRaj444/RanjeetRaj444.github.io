import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { GitHubStats } from "./sections/GitHubStats";
import { Contact } from "./sections/Contact";

export default function App() {
	return (
		<div className="bg-aurora relative min-h-screen">
			<ScrollProgress />
			<Navbar />
			<main>
				<Hero />
				<About />
				<Experience />
				<Skills />
				<Projects />
				<GitHubStats />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
