import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { personal, socials } from "../data/info";

const iconLinks = [
	{ href: socials.github, icon: FaGithub, label: "GitHub" },
	{ href: socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
	{ href: socials.instagram, icon: FaInstagram, label: "Instagram" },
];

export function Footer() {
	return (
		<footer className="border-t border-[var(--color-border)] py-10">
			<div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
				<Link
					to="home"
					smooth
					duration={500}
					className="cursor-pointer text-lg font-bold"
				>
					<span className="accent-text">{personal.firstName}</span>
					<span className="text-[var(--color-muted)]">.dev</span>
				</Link>

				<p className="text-sm text-[var(--color-faint)]">
					© {new Date().getFullYear()} {personal.name}. Built with React, Tailwind
					& Three.js.
				</p>

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
		</footer>
	);
}
