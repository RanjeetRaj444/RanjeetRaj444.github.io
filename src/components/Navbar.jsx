import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { resume, personal } from "../data/info";
import { Button } from "./ui/Button";

const links = [
	{ to: "home", label: "Home" },
	{ to: "about", label: "About" },
	{ to: "experience", label: "Experience" },
	{ to: "skills", label: "Skills" },
	{ to: "projects", label: "Projects" },
	{ to: "contact", label: "Contact" },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
				scrolled ? "glass shadow-lg" : "bg-transparent"
			}`}
		>
			<nav className="container-x flex h-16 items-center justify-between">
				<Link
					to="home"
					smooth
					duration={500}
					className="cursor-pointer text-lg font-bold tracking-tight"
				>
					<span className="accent-text">{personal.firstName}</span>
					<span className="text-[var(--color-muted)]">.dev</span>
				</Link>

				{/* Desktop */}
				<ul className="hidden items-center gap-1 md:flex">
					{links.map((l) => (
						<li key={l.to}>
							<Link
								to={l.to}
								smooth
								spy
								duration={500}
								offset={-70}
								activeClass="text-[var(--color-ink)] after:w-full"
								className="relative cursor-pointer px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] after:absolute after:bottom-0 after:left-3 after:h-px after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-[calc(100%-1.5rem)]"
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>

				<div className="hidden md:block">
					<Button
						as="a"
						href={resume}
						download
						target="_blank"
						rel="noreferrer"
						className="!px-5 !py-2"
					>
						Resume
					</Button>
				</div>

				{/* Mobile toggle */}
				<button
					onClick={() => setOpen((v) => !v)}
					className="glass flex h-10 w-10 items-center justify-center rounded-lg text-xl md:hidden"
					aria-label="Toggle menu"
				>
					{open ? <HiX /> : <HiMenuAlt3 />}
				</button>
			</nav>

			{/* Mobile menu */}
			{open && (
				<div className="glass border-t border-[var(--color-border)] md:hidden">
					<ul className="container-x flex flex-col gap-1 py-4">
						{links.map((l) => (
							<li key={l.to}>
								<Link
									to={l.to}
									smooth
									duration={500}
									offset={-70}
									onClick={() => setOpen(false)}
									className="block cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-muted)] hover:bg-white/5 hover:text-[var(--color-ink)]"
								>
									{l.label}
								</Link>
							</li>
						))}
						<li className="px-3 pt-2">
							<Button
								as="a"
								href={resume}
								download
								target="_blank"
								rel="noreferrer"
								className="w-full"
								onClick={() => setOpen(false)}
							>
								Download Resume
							</Button>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
