import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { skillGroups } from "../data/skills";

export function Skills() {
	return (
		<section id="skills" className="section-pad">
			<div className="container-x">
				<SectionHeading
					eyebrow="Skills"
					title="My tech stack"
					subtitle="Tools and technologies I use to design, build and ship web applications."
				/>

				<div className="grid gap-6 md:grid-cols-3">
					{skillGroups.map((group, gi) => (
						<Reveal key={group.title} delay={gi}>
							<div className="glass glass-hover h-full rounded-[var(--radius-xl2)] p-6">
								<h3 className="mb-5 text-lg font-semibold">
									<span className="accent-text">{group.title}</span>
								</h3>
								<div className="flex flex-wrap gap-2.5">
									{group.skills.map(({ name, icon: Icon, color }) => (
										<span
											key={name}
											className="group flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/[0.02] px-3 py-2 text-sm text-[var(--color-ink)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:bg-white/[0.05]"
										>
											<Icon
												className="text-base transition-transform group-hover:scale-110"
												style={{ color }}
											/>
											{name}
										</span>
									))}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
