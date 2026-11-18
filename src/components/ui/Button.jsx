export function Button({
	as = "a",
	variant = "primary",
	className = "",
	children,
	...props
}) {
	const base =
		"inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

	const variants = {
		primary:
			"text-[#06121f] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] hover:shadow-[0_12px_40px_-10px_rgba(56,189,248,0.6)] hover:-translate-y-0.5",
		ghost:
			"glass text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:-translate-y-0.5",
	};

	const Tag = as;
	return (
		<Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
			{children}
		</Tag>
	);
}
