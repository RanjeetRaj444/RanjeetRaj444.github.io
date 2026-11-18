import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaUsers, FaCodeBranch } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { socials } from "../data/info";

const u = socials.githubUser;

const LANG_COLORS = {
	JavaScript: "#f1e05a",
	TypeScript: "#3178c6",
	HTML: "#e34c26",
	CSS: "#563d7c",
	Python: "#3572A5",
	Java: "#b07219",
	"C++": "#f34b7d",
	Shell: "#89e051",
	SCSS: "#c6538c",
	Vue: "#41b883",
	Dockerfile: "#384d54",
};

function useGitHub() {
	const [state, setState] = useState({ loading: true, error: false, data: null });

	useEffect(() => {
		let active = true;
		(async () => {
			try {
				const [userRes, repoRes] = await Promise.all([
					fetch(`https://api.github.com/users/${u}`),
					fetch(`https://api.github.com/users/${u}/repos?per_page=100&sort=updated`),
				]);
				if (!userRes.ok || !repoRes.ok) throw new Error("rate limited");
				const user = await userRes.json();
				const repos = await repoRes.json();

				const stars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
				const langCount = {};
				for (const r of repos) {
					if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
				}
				const total = Object.values(langCount).reduce((a, b) => a + b, 0) || 1;
				const langs = Object.entries(langCount)
					.sort((a, b) => b[1] - a[1])
					.slice(0, 6)
					.map(([name, count]) => ({
						name,
						pct: Math.round((count / total) * 100),
						color: LANG_COLORS[name] || "#64748b",
					}));

				if (active)
					setState({
						loading: false,
						error: false,
						data: {
							repos: user.public_repos,
							followers: user.followers,
							following: user.following,
							stars,
							langs,
						},
					});
			} catch {
				if (active) setState({ loading: false, error: true, data: null });
			}
		})();
		return () => {
			active = false;
		};
	}, []);

	return state;
}

function StatTile({ icon: Icon, value, label }) {
	return (
		<div className="glass glass-hover flex flex-col items-center gap-1 rounded-[var(--radius-xl2)] p-5 text-center">
			<Icon className="mb-1 text-xl text-[var(--color-accent)]" />
			<span className="text-2xl font-bold sm:text-3xl">{value}</span>
			<span className="text-xs text-[var(--color-faint)]">{label}</span>
		</div>
	);
}

export function GitHubStats() {
	const { loading, error, data } = useGitHub();

	return (
		<section id="github" className="section-pad">
			<div className="container-x">
				<SectionHeading
					index="05"
					eyebrow="Activity"
					title="My GitHub"
					subtitle="A live snapshot of my open-source activity, pulled straight from GitHub."
				/>

				{/* Stat tiles */}
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
					{loading
						? Array.from({ length: 4 }).map((_, i) => (
								<div
									key={i}
									className="glass h-28 animate-pulse rounded-[var(--radius-xl2)]"
								/>
							))
						: !error &&
							data && (
								<>
									<Reveal>
										<StatTile icon={FaCodeBranch} value={data.repos} label="Repositories" />
									</Reveal>
									<Reveal delay={1}>
										<StatTile icon={FaStar} value={data.stars} label="Total Stars" />
									</Reveal>
									<Reveal delay={2}>
										<StatTile icon={FaUsers} value={data.followers} label="Followers" />
									</Reveal>
									<Reveal delay={3}>
										<StatTile icon={HiUserGroup} value={data.following} label="Following" />
									</Reveal>
								</>
							)}
				</div>

				{/* Language breakdown */}
				{!loading && !error && data?.langs?.length > 0 && (
					<Reveal delay={1}>
						<div className="glass mt-6 rounded-[var(--radius-xl2)] p-6">
							<h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
								Most Used Languages
							</h3>
							<div className="mb-4 flex h-3 w-full overflow-hidden rounded-full bg-white/5">
								{data.langs.map((l) => (
									<div
										key={l.name}
										style={{ width: `${l.pct}%`, backgroundColor: l.color }}
										title={`${l.name} ${l.pct}%`}
									/>
								))}
							</div>
							<div className="flex flex-wrap gap-x-5 gap-y-2">
								{data.langs.map((l) => (
									<span
										key={l.name}
										className="flex items-center gap-2 text-sm text-[var(--color-muted)]"
									>
										<span
											className="h-3 w-3 rounded-full"
											style={{ backgroundColor: l.color }}
										/>
										{l.name} <span className="text-[var(--color-faint)]">{l.pct}%</span>
									</span>
								))}
							</div>
						</div>
					</Reveal>
				)}

				{/* Contribution graph (reliable service) */}
				<Reveal delay={2}>
					<div className="glass mt-6 overflow-x-auto rounded-[var(--radius-xl2)] p-6">
						<h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
							Contribution Graph
						</h3>
						<img
							src={`https://ghchart.rshah.org/38bdf8/${u}`}
							alt={`${u} contribution graph`}
							className="mx-auto w-full min-w-[640px]"
							loading="lazy"
						/>
					</div>
				</Reveal>

				{error && (
					<p className="mt-6 text-center text-sm text-[var(--color-faint)]">
						Live stats are rate-limited right now — check out my full profile below.
					</p>
				)}

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
