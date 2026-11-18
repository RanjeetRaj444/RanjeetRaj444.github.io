import resume from "../assets/RanjeetKumarRaj-FullStackWebDeveloper-Qe3c.pdf";
import profile from "../assets/Ranjeet-3.png";

export { resume, profile };

export const personal = {
	name: "Ranjeet Kumar Raj",
	firstName: "Ranjeet",
	roles: ["Full Stack Developer", "MERN Stack Engineer", "React Developer"],
	tagline:
		"I build fast, modern web applications end to end — from pixel-perfect React interfaces to robust Node.js APIs.",
	location: "India",
	email: "ranjeetraj44666@gmail.com",
	phone: "+91 7488081571",
	available: true,
};

export const socials = {
	github: "https://github.com/RanjeetRaj444",
	linkedin: "https://www.linkedin.com/in/ranjeet-raj-19aa67256/",
	instagram: "https://www.instagram.com/ran.jeetraj/",
	githubUser: "RanjeetRaj444",
};

export const stats = [
	{ value: "1+", label: "Year Experience" },
	{ value: "20+", label: "Projects Built" },
	{ value: "10+", label: "Technologies" },
];

export const about = {
	heading: "Turning ideas into reliable, scalable web products.",
	body: [
		"I'm a Full Stack Developer with over a year of professional experience shipping production web and desktop applications. I work end to end — designing clean UIs in React, building REST APIs with Node and Express, modeling data in SQL and MongoDB, and adding real-time features with Socket.IO.",
		"Recently I've built AI-powered calling integrations, an Electron desktop HRMS, and a real-time construction-management platform. I focus on writing maintainable code, crafting responsive and accessible interfaces, and delivering a smooth user experience.",
	],
	highlights: [
		"Responsive, accessible UI with React & Tailwind",
		"REST APIs with Node, Express & MongoDB",
		"State management with Redux & Context",
		"Clean code, Git workflow & deployment",
	],
};

// ---- EXPERIENCE ----
export const experience = [
	{
		role: "Full Stack Developer",
		company: "Whitestone Infotech",
		companyUrl: "https://whitestoneinfotech.com",
		location: "India",
		start: "Jul 2025",
		end: "Present",
		summary:
			"Building production web and desktop applications end to end — React frontends, Node/Express APIs and real-time features — across sales-automation, HR and construction domains for clients in India and Canada.",
		points: [
			"Developed Leadingly, an AI-powered inbound calling feature integrating ElevenLabs voice and Twilio telephony for automated, real-time customer conversations.",
			"Built HRMS, an employee-tracker desktop app with Electron, and owned its admin panel across both frontend (React, Vite, MUI) and backend (Node, Express, SQL) with Socket.IO real-time updates.",
			"Delivered a construction management web app for a Canada-based client to handle worker check-in/check-out and track building progress live over WebSockets.",
			"Worked across the full stack: React (Vite), Material UI and client-side routing on the frontend; Node, Express and SQL on the backend, with Socket.IO for real-time data.",
		],
		tech: [
			"React",
			"Vite",
			"MUI",
			"Node.js",
			"Express",
			"SQL",
			"Socket.IO",
			"Electron",
			"Twilio",
		],
	},
];
