import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "../styled-components/Menu";
import "../styles/navbar.css";
import { Loader } from "./Loader";
// ranjeet_portfolio/src
import resume from "../assets/RanjeetKumarRaj-FullStackWebDeveloper-Qe3c.pdf";

import { RiMenuFoldFill, RiCloseLine } from "react-icons/ri";

export const Navbar = ({ home }) => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav id="nav-menu">
			<Link to="home" offset={-100}>
				<div className="brand">
					<Loader />
					<h3 id="user-detail-name">Ranjeet</h3>
				</div>
			</Link>

			<div className="bigScreenNav">
				<ul className={"menus"}>
					<li className="menu__item">
						<Link className="nav-link home" to="home" offset={-100}>
							<Menu>Home</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link className="nav-link about" to="about" offset={-100}>
							<Menu>About</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link className="nav-link skills" to="skills" offset={-100}>
							<Menu>Skills</Menu>
						</Link>
					</li>

					<li className="menu__item">
						<Link className="nav-link projects" to="projects" offset={-100}>
							<Menu>Projects</Menu>
						</Link>
					</li>

					<li className="menu__item">
						{" "}
						<Link className="nav-link contact" to="contact" offset={-100}>
							<Menu>Contacts</Menu>
						</Link>
					</li>
					<li className="menu__item" id="resume">
						<a
							id="resume-button-1"
							target="_blank"
							rel="noreferrer"
							className="nav-link resume"
							href={resume}
							download
						>
							Resume
						</a>
					</li>
				</ul>
			</div>

			<div className="smallScreenNav">
				<button onClick={() => setOpenMenu(true)}>
					<RiMenuFoldFill />
				</button>

				{openMenu && (
					<div className="menus__small">
						<ul className="small">
							<button onClick={() => setOpenMenu(false)}>
								<RiCloseLine />
							</button>

							<li className="menu__item">
								<Link
									className="nav-link home"
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="home"
									offset={-100}
								>
									<Menu>Home</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									className="nav-link about"
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="about"
									offset={-100}
								>
									<Menu>About</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									className="nav-link skills"
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="skills"
									offset={-100}
								>
									<Menu>Skills</Menu>
								</Link>
							</li>

							<li className="menu__item">
								<Link
									className="nav-link projects"
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="projects"
									offset={-100}
								>
									<Menu>Projects</Menu>
								</Link>
							</li>

							<li className="menu__item">
								{" "}
								<Link
									className="nav-link contact"
									data-aos="fade-up"
									onClick={() => setOpenMenu(false)}
									to="contact"
									offset={-100}
								>
									<Menu>Contacts</Menu>
								</Link>
							</li>
							<li className="menu__item" id="resume">
								<a
									id="resume-button-1"
									className="nav-link resume"
									target="_blank"
									rel="noreferrer"
									href={resume}
									download
								>
									Resume
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};
