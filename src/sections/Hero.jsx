import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personal, socials, stats, resume } from "../data/info";
import { Button } from "../components/ui/Button";
import { Magnetic } from "../components/ui/Magnetic";

const HeroScene = lazy(() => import("../components/three/HeroScene"));

const socialLinks = [
	{ href: socials.github, icon: FaGithub, label: "GitHub" },
	{ href: socials.linkedin, icon: FaLinkedin, label: "LinkedIn" },
	{ href: socials.instagram, icon: FaInstagram, label: "Instagram" },
];

function useTypedRole(roles, speed = 90, pause = 1500) {
	const [text, setText] = useState("");
	const [i, setI] = useState(0);
	const [del, setDel] = useState(false);

	useEffect(() => {
		const current = roles[i % roles.length];
		let timeout;
		if (!del && text === current) {
			timeout = setTimeout(() => setDel(true), pause);
		} else if (del && text === "") {
			setDel(false);
			setI((v) => v + 1);
		} else {
			timeout = setTimeout(
				() => {
					setText((prev) =>
						del
							? current.slice(0, prev.length - 1)
							: current.slice(0, prev.length + 1),
					);
				},
				del ? speed / 2 : speed,
			);
		}
		return () => clearTimeout(timeout);
	}, [text, del, i, roles, speed, pause]);

	return text;
}

export function Hero() {
	const role = useTypedRole(personal.roles);

	return (
		<section id="home" className="relative min-h-screen overflow-hidden">
			{/* Grid backdrop */}
			<div className="bg-grid absolute inset-0 -z-20" />
			{/* 3D background */}
			<div className="absolute inset-0 -z-10 opacity-90">
				<Suspense fallback={null}>
					<HeroScene />
				</Suspense>
			</div>
			<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

			<div className="container-x flex min-h-screen flex-col justify-center pt-24 pb-16">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					className="max-w-3xl"
				>
					{personal.available && (
						<span className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-[var(--color-muted)]">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
							</span>
							Available for work
						</span>
					)}

					<h1 className="text-4xl font-extrabold leading-[1.1] sm:text-6xl md:text-7xl">
						Hi, I'm <span className="accent-text-anim">{personal.name}</span>
					</h1>

					<p className="mt-4 h-9 text-xl font-medium text-[var(--color-muted)] sm:text-2xl">
						{role}
						<span className="ml-0.5 inline-block w-0.5 animate-pulse bg-[var(--color-accent)] align-middle">
							&nbsp;
						</span>
					</p>

					<p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
						{personal.tagline}
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<Magnetic>
							<Button
								as={Link}
								to="projects"
								smooth
								duration={500}
								offset={-70}
								className="shimmer cursor-pointer"
							>
								View My Work
							</Button>
						</Magnetic>
						<Magnetic>
							<Button as="a" variant="ghost" href={`mailto:${personal.email}`}>
								<HiOutlineMail className="text-lg" /> Get in Touch
							</Button>
						</Magnetic>
					</div>

					<div className="mt-8 flex items-center gap-3">
						{socialLinks.map(({ href, icon: Icon, label }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}
								className="glass flex h-11 w-11 items-center justify-center rounded-full text-lg text-[var(--color-muted)] transition-all hover:-translate-y-1 hover:text-[var(--color-accent)]"
							>
								<Icon />
							</a>
						))}
					</div>

					{/* Stats */}
					<div className="mt-12 flex flex-wrap gap-8">
						{stats.map((s) => (
							<div key={s.label}>
								<div className="text-3xl font-bold accent-text">{s.value}</div>
								<div className="text-sm text-[var(--color-faint)]">{s.label}</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>

			<Link
				to="about"
				smooth
				duration={500}
				offset={-70}
				className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-[var(--color-faint)] transition-colors hover:text-[var(--color-accent)]"
			>
				<span className="text-xs uppercase tracking-widest">Scroll</span>
				<FaArrowDown className="animate-bounce" />
			</Link>
		</section>
	);
}
