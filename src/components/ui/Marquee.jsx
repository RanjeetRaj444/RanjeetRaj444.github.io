export function Marquee({ items, renderItem, className = "" }) {
	// duplicate the list so the -50% translate loops seamlessly
	const doubled = [...items, ...items];
	return (
		<div className={`marquee-mask w-full min-w-0 max-w-full overflow-hidden ${className}`}>
			<div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
				{doubled.map((item, i) => (
					<div key={i} className="shrink-0">
						{renderItem(item, i)}
					</div>
				))}
			</div>
		</div>
	);
}
