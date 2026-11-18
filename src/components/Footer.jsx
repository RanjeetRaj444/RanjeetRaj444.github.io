import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personal, socials } from "../data/info";
import { Button } from "./ui/Button";
import { Magnetic } from "./ui/Magnetic";

const iconLinks = [
	{ href: socials.github, icon: FaGithub, label: "GitHub" },
	{ href: socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
	{ href: socials.instagram, icon: FaInstagram, label: "Instagram" },
];

const navLinks = [
	{ to: "about", label: "About" },
	{ to: "experience", label: "Experience" },
	{ to: "skills", label: "Skills" },
	{ to: "projects", label: "Projects" },
	{ to: "contact", label: "Contact" },
];

export function Footer() {
	return (
		<footer className="border-t border-[var(--color-border)]">
			{/* CTA band */}
			<div className="container-x py-16 text-center">
				<p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
					Let's connect
				</p>
				<h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
					Have a project in mind? <br className="hidden sm:block" />
					<span className="accent-text-anim">Let's build it together.</span>
				</h2>
				<div className="mt-8 flex justify-center">
					<Magnetic>
						<Button
							as="a"
							href={`mailto:${personal.email}`}
							className="shimmer"
						>
							<HiOutlineMail className="text-lg" /> Say Hello
						</Button>
					</Magnetic>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-[var(--color-border)] py-8">
				<div className="container-x flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
					<Link
						to="home"
						smooth
						duration={500}
						className="cursor-pointer text-lg font-bold"
					>
						<span className="accent-text">{personal.firstName}</span>
						<span className="text-[var(--color-muted)]">.dev</span>
					</Link>

					<nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
						{navLinks.map((l) => (
							<Link
								key={l.to}
								to={l.to}
								smooth
								duration={500}
								offset={-70}
								className="cursor-pointer text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
							>
								{l.label}
							</Link>
						))}
					</nav>

					<div className="flex gap-3">
						{iconLinks.map(({ href, icon: Icon, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}
								className="glass flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-muted)] transition-all hover:-translate-y-1 hover:text-[var(--color-accent)]"
							>
								<Icon />
							</a>
						))}
					</div>
				</div>
				<p className="container-x mt-6 text-center text-xs text-[var(--color-faint)]">
					© {new Date().getFullYear()} {personal.name}. Built with React, Tailwind
					& Three.js.
				</p>
			</div>
		</footer>
	);
}
