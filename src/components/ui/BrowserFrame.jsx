export function BrowserFrame({ url, children, className = "" }) {
	// strip protocol for a cleaner address-bar look
	const display = (url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
	return (
		<div
			className={`overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#0b1322] ${className}`}
		>
			{/* chrome */}
			<div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-white/[0.03] px-3 py-2">
				<div className="flex gap-1.5">
					<span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
					<span className="h-3 w-3 rounded-full bg-[#febc2e]" />
					<span className="h-3 w-3 rounded-full bg-[#28c840]" />
				</div>
				<div className="ml-1 flex flex-1 items-center gap-1.5 truncate rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] text-[var(--color-faint)]">
					<svg
						width="10"
						height="10"
						viewBox="0 0 24 24"
						fill="none"
						className="shrink-0"
					>
						<path
							d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0a14 14 0 010 20m0-20a14 14 0 000 20M2 12h20"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
					</svg>
					<span className="truncate">{display}</span>
				</div>
			</div>
			{/* content */}
			<div className="relative">{children}</div>
		</div>
	);
}
