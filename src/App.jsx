import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorGlow } from "./components/CursorGlow";
import { Preloader } from "./components/Preloader";
import { ScrollToTop } from "./components/ScrollToTop";
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
			<Preloader />
			<a
				href="#home"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#06121f]"
			>
				Skip to content
			</a>
			<CursorGlow />
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
			<ScrollToTop />
		</div>
	);
}
