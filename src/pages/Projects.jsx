import React from "react";
import Carousel from "react-elastic-carousel";
import { data } from "../data/Data";
import { Goto } from "../styled-components/Goto";
import { Heading } from "../styled-components/Heading";
import { List } from "../styled-components/ProjectList";
import "../styles/projects.css";

export const Projects = () => {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 2 },
		{ width: 1150, itemsToShow: 3 },
		{ width: 1450, itemsToShow: 4 },
		{ width: 1750, itemsToShow: 5 },
	];
	return (
		<section id="projects" className="projects">
			<div className="heading" data-aos="fade-up">
				<Heading>
					<h2>Projects ({data.length}) </h2>
				</Heading>
			</div>

			<div className="crsl">
				<Carousel breakPoints={breakPoints}>
					{data.map(
						({
							id,
							image,
							title,
							github,
							demo,
							projectType,
							des,
							techStach,
						}) => {
							return (
								<div className="project-card" key={id.toString()}>
									<List>
										<div className="projects__item">
											<div className="projects__item-image">
												<img src={image} alt={title} />
												<div className="back"></div>
											</div>
											<h3 className="project-title" data-aos="fade-up">
												{title}
											</h3>
											<h5 data-aos="fade-up">{projectType}</h5>
											<h5 data-aos="fade-up" style={{ wordWrap: "break-word" }}>
												{des}
											</h5>
											<div data-aos="fade-up" className="tech_stacks">
												{techStach.map((e, i) => {
													return (
														<div key={i}>
															<img alt={`${title} tech stack`} src={e} />
														</div>
													);
												})}
											</div>

											<div
												id="project-github-link"
												className="projects__item-cta"
												data-aos="fade-up"
											>
												<a
													href={github}
													className="project-github-link"
													rel="noreferrer"
													target="_blank"
												>
													<Goto type="github">Github</Goto>
												</a>
												<a
													href={demo}
													className="btn btn-primary"
													target="_blank"
													rel="noreferrer"
												>
													<Goto className="project-deployed-link" type="demo">
														Demo
													</Goto>
												</a>
											</div>
										</div>
									</List>
								</div>
							);
						},
					)}
				</Carousel>
			</div>
		</section>
	);
};
