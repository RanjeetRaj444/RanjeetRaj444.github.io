import React from "react";
import "../styles/about.css";

import me from "../assets/Ranjeet-3.png";
import { Heading } from "../styled-components/Heading";

export const About = () => {
	return (
		<section id="about" className="about section">
			<div className="heading" data-aos="fade-down">
				<Heading>
					<h2>About Me</h2>
				</Heading>
			</div>

			<div className="about__content">
				<div data-aos="fade-right" className="profile__image">
					<img className="home-img" src={me} alt="ranjeetsangam" />
				</div>

				<div className="profile__info">
					<h4 id="user-detail-intro" data-aos="fade-down">
						Aspiring full-stack developer, armed with HTML, CSS, JavaScript, and
						React skills, completed 12th from Dinesh Kiran Inter College in
						Bihar. Despite the origin in Bihar, the strong interest in computer
						science propelled into the web development field. Now equipped with
						MERN stack expertise, aspire to thrive in a technological
						environment and embrace new challenges on the horizon.
						<br />
						<br />
					</h4>
				</div>
			</div>
		</section>
	);
};
