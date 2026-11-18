import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaPhoneAlt,
	FaPaperPlane,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { personal, socials } from "../data/info";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_READY = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const contactCards = [
	{
		icon: HiOutlineMail,
		label: "Email",
		value: personal.email,
		href: `mailto:${personal.email}`,
	},
	{
		icon: FaPhoneAlt,
		label: "Phone",
		value: personal.phone,
		href: `tel:${personal.phone.replace(/\s/g, "")}`,
	},
];

const socialCards = [
	{ icon: FaGithub, href: socials.github, label: "GitHub" },
	{ icon: FaLinkedin, href: socials.linkedin, label: "LinkedIn" },
	{ icon: FaInstagram, href: socials.instagram, label: "Instagram" },
];

export function Contact() {
	const formRef = useRef(null);
	const [status, setStatus] = useState("idle"); // idle | sending | success | error

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!EMAILJS_READY) {
			// Fallback: open the user's mail client pre-filled
			const fd = new FormData(formRef.current);
			const subject = encodeURIComponent(
				fd.get("title") || `Portfolio message from ${fd.get("name")}`,
			);
			const body = encodeURIComponent(
				`${fd.get("message")}\n\nFrom: ${fd.get("name")} (${fd.get("email")})`,
			);
			window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
			return;
		}

		setStatus("sending");
		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
				publicKey: PUBLIC_KEY,
			});
			setStatus("success");
			formRef.current.reset();
			setTimeout(() => setStatus("idle"), 5000);
		} catch (err) {
			console.error(err);
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
		}
	};

	const inputClass =
		"w-full rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-faint)] outline-none transition-colors focus:border-[var(--color-accent)]";

	return (
		<section id="contact" className="section-pad bg-[var(--color-bg-soft)]">
			<div className="container-x">
				<SectionHeading
					index="06"
					eyebrow="Contact"
					title="Let's work together"
					subtitle="Have a project in mind or just want to say hi? My inbox is always open."
				/>

				<div className="grid gap-8 lg:grid-cols-5">
					{/* Left: info */}
					<div className="lg:col-span-2">
						<Reveal>
							<div className="flex flex-col gap-4">
								{contactCards.map(({ icon: Icon, label, value, href }) => (
									<a
										key={label}
										href={href}
										className="glass glass-hover flex items-center gap-4 rounded-xl p-4"
									>
										<span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 text-lg text-[var(--color-accent)]">
											<Icon />
										</span>
										<div>
											<div className="text-xs uppercase tracking-wide text-[var(--color-faint)]">
												{label}
											</div>
											<div className="text-sm font-medium break-all">{value}</div>
										</div>
									</a>
								))}
							</div>
						</Reveal>

						<Reveal delay={1}>
							<div className="mt-4 flex gap-3">
								{socialCards.map(({ icon: Icon, href, label }) => (
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
						</Reveal>
					</div>

					{/* Right: form */}
					<Reveal delay={1} className="lg:col-span-3">
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="glass rounded-[var(--radius-xl2)] p-6 sm:p-8"
						>
							<div className="grid gap-4 sm:grid-cols-2">
								<input
									name="name"
									required
									aria-label="Your name"
									autoComplete="name"
									placeholder="Your name"
									className={inputClass}
								/>
								<input
									name="email"
									type="email"
									required
									aria-label="Your email"
									autoComplete="email"
									placeholder="Your email"
									className={inputClass}
								/>
							</div>
							<input
								name="title"
								aria-label="Subject"
								placeholder="Subject"
								className={`${inputClass} mt-4`}
							/>
							<textarea
								name="message"
								required
								rows={5}
								aria-label="Message"
								placeholder="Tell me about your project..."
								className={`${inputClass} mt-4 resize-none`}
							/>

							<button
								type="submit"
								disabled={status === "sending"}
								className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3 text-sm font-semibold text-[#06121f] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
							>
								<FaPaperPlane />
								{status === "sending" ? "Sending..." : "Send Message"}
							</button>

							{status === "success" && (
								<p className="mt-4 text-sm text-emerald-400">
									✓ Message sent! I'll get back to you soon.
								</p>
							)}
							{status === "error" && (
								<p className="mt-4 text-sm text-rose-400">
									Something went wrong. Please email me directly at {personal.email}.
								</p>
							)}
							{!EMAILJS_READY && (
								<p className="mt-4 text-xs text-[var(--color-faint)]">
									Note: the form currently opens your email app. (EmailJS keys not
									configured yet.)
								</p>
							)}
						</form>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
