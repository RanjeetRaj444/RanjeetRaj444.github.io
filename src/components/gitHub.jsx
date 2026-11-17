import React from "react";
import styled from "styled-components";

export default function GitHubComponents() {
	return (
		<DIV>
			<div className="react-activity-calendar">
				<h1 className="home-about-description">
					Days I <span className="purple">Worked</span>{" "}
				</h1>
				<img
					src="https://ghchart.rshah.org/021F34/RanjeetRaj444"
					alt="Ranjeet's GitHub contribution chart"
					style={{ width: "80%", display: "block", margin: "auto" }}
				/>
			</div>
			<h1 className="home-about-description">My Statistics</h1>
			<div className="stats">
				<img
					id="github-streak-stats"
					align="center"
					src="https://github-readme-streak-stats.herokuapp.com/?user=RanjeetRaj444&theme=dark&hide_border=false"
					alt="RanjeetRaj444"
				/>
				<img
					id="github-stats-card"
					src="https://github-readme-stats.vercel.app/api?username=RanjeetRaj444&theme=dark&hide_border=false&include_all_commits=false&count_private=false"
					align="center"
					alt="RanjeetRaj444"
				/>
				<img
					id="github-top-langs"
					align="center"
					src="https://github-readme-stats.vercel.app/api/top-langs/?username=RanjeetRaj444&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
					alt="RanjeetRaj444"
				/>
			</div>
		</DIV>
	);
}

const DIV = styled.div`
	/* text-items: center; */
	width: 80%;
	margin: auto;
	text-align: center;
	img {
		width: 80%;
	}
	h1 {
		width: 80%;
		font-size: 1em;
	}
	.stats {
		display: grid;
		grid-template-columns: auto auto auto;
	}
	@media screen and (max-width: 850px) {
		.stats {
			grid-template-columns: auto auto;
		}
	}
	@media screen and (max-width: 550px) {
		.stats {
			grid-template-columns: auto;
      
		}
	}
`;
