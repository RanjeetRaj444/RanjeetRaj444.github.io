import React from "react";
import { Heading } from "../styled-components/Heading";
import { Skill } from "../styled-components/Skills";
import "../styles/skills.css";

// icons
import { DiReact, DiCss3, DiHtml5, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import {
	SiTypescript,
	SiRedux,
	SiChakraui,
	SiBootstrap,
	SiNetlify,
	SiPostman,
	SiFigma,
	SiVercel,
	SiCanva,
	SiTailwindcss 
} from "react-icons/si";
import { VscFileCode } from "react-icons/vsc";

// back
// import { FaNodeJs } from "react-icons/fa";
// import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

export const Skills = () => {
	return (
		<section id="skills" className="skills">
			<div className="heading" data-aos="fade-up">
				<Heading>
					<h2>Skills</h2>
				</Heading>
			</div>
			<div id="user-detail-intro" className="skills__box">
				<Skill className="skills_card" data-aos="fade-up">
					<h3>Front End</h3>
					<div className="tech">
						<p className="skills-card">
							<DiReact className="skills-card-img" />{" "}
							<span className="skills-card-name">ReactJs</span>
						</p>
						<p className="skills-card">
							<DiHtml5 className="skills-card-img" />{" "}
							<span className="skills-card-name">HTML</span>
						</p>
						<p className="skills-card">
							<DiCss3 className="skills-card-img" />{" "}
							<span className="skills-card-name">CSS</span>
						</p>
						<p className="skills-card">
							<IoLogoJavascript className="skills-card-img" />
							<span className="skills-card-name">JavaScript</span>
						</p>
						<p className="skills-card">
							<SiBootstrap className="skills-card-img" />
							<span className="skills-card-name">Bootstrap</span>
						</p>
						<p className="skills-card">
							<SiChakraui className="skills-card-img" />
							<span className="skills-card-name">Chakra Ui</span>
						</p>
						<p className="skills-card">
							<SiTypescript className="skills-card-img" />
							<span className="skills-card-name">TypeScript</span>
						</p>
						<p className="skills-card">
							<SiRedux className="skills-card-img" />
							<span className="skills-card-name">Redux</span>
						</p>
						<p className="skills-card">
							<SiTailwindcss  className="skills-card-img" />
							<span className="skills-card-name">Tailwind Css</span>
						</p>
					</div>
				</Skill>

				<Skill className="skills_card" data-aos="fade-up">
					<h3>Back End</h3>
					<div className="skills__list">
						<div className="tech">
							<p>
								<FaNodeJs />
								NodeJs
							</p>
							<p>
								<DiMongodb />
								MongoDB
							</p>
							<p>
								<SiExpress />
								ExpressJs
							</p>
						</div>
					</div>
				</Skill>
				<Skill className="skills_card" data-aos="fade-up">
					<h3>Others</h3>
					<div className="skills__list">
						<div className="tech">
							<p className="skills-card">
								<AiFillGithub className="skills-card-img" />
								<span className="skills-card-name">Github</span>
							</p>
							<p className="skills-card">
								<FaGitAlt className="skills-card-img" />
								<span className="skills-card-name"> Git</span>
							</p>
							<p className="skills-card">
								<SiNetlify className="skills-card-img" />
								<span className="skills-card-name"> Netlify</span>
							</p>
							<p className="skills-card">
								<VscFileCode className="skills-card-img" />
								<span className="skills-card-name"> Vs code</span>
							</p>
							<p className="skills-card">
								<SiPostman className="skills-card-img" />
								<span className="skills-card-name"> Postman</span>
							</p>
							<p className="skills-card">
								<SiFigma className="skills-card-img" />
								<span className="skills-card-name"> Figma</span>
							</p>
							<p className="skills-card">
								<SiVercel className="skills-card-img" />
								<span className="skills-card-name"> Vercel</span>
							</p>
							<p className="skills-card">
								<SiCanva className="skills-card-img" />
								<span className="skills-card-name"> Canva</span>
							</p>
						</div>
					</div>
				</Skill>
			</div>
		</section>
	);
};
