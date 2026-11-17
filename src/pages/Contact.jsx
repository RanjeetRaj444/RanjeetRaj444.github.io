import React from "react";
import "../styles/contact.css";

import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

import { Heading } from "../styled-components/Heading";

export const Contact = () => {
	return (
		<section id="contact" className="contacts">
			<div className="heading" data-aos="fade-up">
				<Heading>
					<h2>Contacts</h2>
				</Heading>
			</div>

			<div className="contact__container">
				<div className="contact__options">
					<article className="contact__option" data-aos="fade-up">
						<MdEmail className="contact__option-icon" />
						<h4 style={{ wordWrap: "break-word" }}>Email</h4>
						<h5 style={{ wordWrap: "break-word" }} id="mail">
							ranjeetraj44666@gmail.com
						</h5>
						<a
							id="contact-email"
							className="mail"
							href="mailto:ranjeetraj44666@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>

					<article className="contact__option" data-aos="fade-up">
						<RiInstagramFill className="contact__option-icon " />
						<h4 style={{ wordWrap: "break-word" }}>Instagram</h4>
						<h5 style={{ wordWrap: "break-word" }}>Ranjeet</h5>
						<a
							href="https://www.instagram.com/ran.jeetraj/"
							target="_blank"
							rel="noreferrer"
							className="instagram"
						>
							Visit Instagram
						</a>
					</article>
					<article className="contact__option" data-aos="fade-up">
						<h3 id="contact-github">
							<a
								href="https://github.com/RanjeetRaj444"
								target="_blank"
								rel="noreferrer"
							>
								<h2 style={{ wordWrap: "break-word" }}>GitHub</h2>{" "}
							</a>
						</h3>
						<h3 id="contact-linkedin">
							<a
								href="https://www.linkedin.com/in/ranjeet-raj-19aa67256/"
								target="_blank"
								rel="noreferrer"
							>
								<h2 style={{ wordWrap: "break-word" }}>Linkedin</h2>
							</a>
						</h3>
						<br />
						<h3 style={{ wordWrap: "break-word" }} id="contact-phone">
							Phone:- +91 7488081571
						</h3>
					</article>
				</div>
			</div>
		</section>
	);
};
