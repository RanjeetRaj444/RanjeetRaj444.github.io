import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { socials } from "../data/info";

const u = socials.githubUser;

export function GitHubStats() {
	const [streakErr, setStreakErr] = useState(false);

	return (
		<section id="github" className="section-pad">
			<div className="container-x">
				<SectionHeading
					eyebrow="Activity"
					title="My GitHub"
					subtitle="A snapshot of my open-source activity and contributions."
				/>

				<div className="grid gap-6 lg:grid-cols-2">
					<Reveal>
						<div className="glass rounded-[var(--radius-xl2)] p-6">
							<img
								src={`https://github-readme-stats.vercel.app/api?username=${u}&theme=transparent&hide_border=true&title_color=38bdf8&icon_color=818cf8&text_color=9aa8c0&include_all_commits=true`}
								alt={`${u} GitHub stats`}
								className="w-full"
								loading="lazy"
							/>
						</div>
					</Reveal>

					<Reveal delay={1}>
						<div className="glass flex items-center justify-center rounded-[var(--radius-xl2)] p-6">
							{!streakErr ? (
								<img
									src={`https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=transparent&hide_border=true&ring=38bdf8&fire=818cf8&currStreakLabel=38bdf8`}
									alt={`${u} contribution streak`}
									className="w-full"
									loading="lazy"
									onError={() => setStreakErr(true)}
								/>
							) : (
								<img
									src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&theme=transparent&hide_border=true&title_color=38bdf8&text_color=9aa8c0&layout=compact&langs_count=8`}
									alt={`${u} top languages`}
									className="w-full"
									loading="lazy"
								/>
							)}
						</div>
					</Reveal>
				</div>

				<Reveal delay={2}>
					<div className="glass mt-6 overflow-x-auto rounded-[var(--radius-xl2)] p-6">
						<img
							src={`https://ghchart.rshah.org/38bdf8/${u}`}
							alt={`${u} contribution graph`}
							className="mx-auto w-full min-w-[640px]"
							loading="lazy"
						/>
					</div>
				</Reveal>

				<div className="mt-8 text-center">
					<a
						href={socials.github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:text-[var(--color-accent)]"
					>
						<FaGithub className="text-lg" /> View GitHub Profile
					</a>
				</div>
			</div>
		</section>
	);
}
