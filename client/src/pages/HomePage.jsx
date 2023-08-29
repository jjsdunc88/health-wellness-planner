import React from "react";
import {
  LandingPageContainer,
  VideoBackground,
  WelcomeContainer,
  WelcomeHeading,
  WelcomeQuote,
  StyledNavButton,
} from "../styled-components/HomePage-Style";
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
        <StyledNavButton href="/preview">Get Started</StyledNavButton>
      </WelcomeContainer>
    </LandingPageContainer>
  );
}

export default HomePage;
