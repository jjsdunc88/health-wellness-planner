import React from "react";
import { FooterContainer, GitHubLink, GitHubImage } from "../styled-components/Footer-Style";
import githubMark from "../assets/GitHub-Mark.png";

function Footer() {
    return (
        <FooterContainer>
            <p>&#169; FitGuide</p>
            <GitHubLink href="https://github.com/jjsdunc88/health-wellness-planner">
                <GitHubImage src={githubMark} alt="GitHub Logo" />
            </GitHubLink>
        </FooterContainer>
    );
}

export default Footer;
