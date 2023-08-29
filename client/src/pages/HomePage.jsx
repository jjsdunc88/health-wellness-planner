import React from "react";
import {
  LandingPageContainer,
  VideoBackground,
  WelcomeContainer,
  WelcomeHeading,
  WelcomeQuote,
  StartButton,
} from "../styled-components/HomePage-Style";
import { NavContainer, NavButton } from "../styled-components/Nav-Style";
import landingVideo from "../assets/landing-video.mp4";

function HomePage() {
  return (
    <LandingPageContainer>
      <VideoBackground autoPlay loop muted>
        <source src={landingVideo} type="video/mp4" />
      </VideoBackground>
      <WelcomeContainer>
        <WelcomeHeading>Welcome</WelcomeHeading>
        <WelcomeQuote>
          "Strong people are harder to kill than weak people, and more useful in general"
        </WelcomeQuote>
        <NavButton href="/preview"> Get Started</NavButton>
      </WelcomeContainer>
    </LandingPageContainer>
  );
}

export default HomePage;
