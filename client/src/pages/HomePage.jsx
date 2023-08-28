import React from "react";
import {
  LandingPageContainer,
  WelcomeContainer,
  WelcomeHeading,
  WelcomeQuote,
  StartButton,
} from "../styled-components/HomePage-Style";

function HomePage() {
  return (
    <LandingPageContainer>
      <WelcomeContainer>
        <WelcomeHeading>Welcome</WelcomeHeading>
        <WelcomeQuote>
          "Strong people are harder to kill than weak people, and more useful in general"
        </WelcomeQuote>
        <StartButton>Get Started</StartButton>
      </WelcomeContainer>
    </LandingPageContainer>
  );
}

export default HomePage;
