import React, { useState } from "react";
import { Link } from "react-scroll";
import { HomeButton } from "../styled-components/HomeButton";
import "../styles/home.css";
import Typical from "react-typical";
import resume from "../assets/RanjeetKumarRaj-FullStackWebDeveloper-Qe3c.pdf";
import homeIMG from "../assets/book.png";
import { images } from "../constants";
import { motion } from "framer-motion";
import {
	AiFillLinkedin,
	AiFillGithub,
	// AiFillYoutube,
	AiFillInstagram,
} from "react-icons/ai";

import { Socials } from "../styled-components/Socials";
export const Home = () => {
	const [contact] = useState(true);

	const scaleVariants = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	// "class"
	return (
		<section id="home" className="homes" data-aos="zoom">
			<div id="user-detail-intro" className="home__content">
				<h3 data-aos="fade-down">Hello, I am </h3>
				<h1 id="user-detail-name" data-aos="fade-down">
					Ranjeet Kumar Raj
				</h1>
				<h2>
					<span style={{ color: "#814309" }}>
						<Typical
							steps={["Full Stack Developer 👨‍💻", 1000, "Artist 🎨", 1000]}
							loop={Infinity}
							wrapper="p"
						/>
					</span>
				</h2>

				<div className="home__buttons">
					<HomeButton id="resume-button-2">
						<a
							href={resume}
							target="_blank"
							rel="noreferrer"
							data-aos="fade-right"
							download
						>
							<span>Resume</span>
							<i></i>
						</a>
					</HomeButton>

					<HomeButton data-aos="fade-left" contact={contact}>
						<span>
							<Link to="contact" offset={-100}>
								Contact Me
							</Link>
						</span>
						<i></i>
					</HomeButton>
				</div>

				<div className="socials__buttons">
					<a
						href="https://www.linkedin.com/in/ranjeet-raj-19aa67256/"
						target="_blank"
						rel="noreferrer"
						data-aos="flip-up"
					>
						<Socials icon="linkedin">
							<AiFillLinkedin />
						</Socials>
					</a>

					<a
						href="https://github.com/RanjeetRaj444"
						rel="noreferrer"
						target="_blank"
						data-aos="flip-up"
					>
						<Socials icon="github">
							<AiFillGithub />
						</Socials>
					</a>

					<a
						href="https://www.instagram.com/ran.jeetraj/"
						target="_blank"
						rel="noreferrer"
						data-aos="flip-up"
					>
						<Socials icon="insta">
							<AiFillInstagram />
						</Socials>
					</a>
				</div>
			</div>

			<div className="home__img">
				<motion.img
					whileInView={{ scale: [0.8, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={homeIMG}
					alt="home"
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
			</div>

			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[
					images.css,
					images.html,
					images.node,
					images.react,
					images.javascript,
				].map((circle, index) => (
					<div className="circle-cmp app__flex" key={`circle-${index}`}>
						<img src={circle} alt="profile_bg" />
					</div>
				))}
			</motion.div>
		</section>
	);
};
