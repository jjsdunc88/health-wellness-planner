import React from "react";
import { Link } from "react-router-dom";
import {
    PreviewPageContainer,
    SectionTitle,
    Paragraph,
    List,
    ListItem,
    SubListItem,
    VideoBackground,
} from "../styled-components/PreviewPage-Style";
import previewVideo from "../assets/previewVideo.mp4";
import weakCat from "../assets/weakCat.jpeg";
import strongCat from "../assets/strongCat.jpeg";
import { css } from "@emotion/react";

const containerStyle = {
    margin: "20px 0",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    gap: "40px",
};

const imageContainerStyle = {
    flex: 1,
    textAlign: "center",
};

const imageStyle = {
    width: "300px",
    height: "400px",
};

const centerButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
    height: 100vh;
`;

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
    ":hover": {
        backgroundColor: "#555",
    },
    ":active": {
        backgroundColor: "#777",
    },
};

function PreviewPage() {
    return (
        <PreviewPageContainer>
            <VideoBackground autoPlay loop muted>
                <source src={previewVideo} type="video/mp4" />
            </VideoBackground>
            <div>
                <SectionTitle>What is FitGuide?</SectionTitle>
            </div>
            <Paragraph>
                FitGuide is a tool to help develop effective diet and exercise
                strategies that promote positive long-term health & fitness, improve
                quality of life, and reduce the risk of chronic disease.
            </Paragraph>
            <div>
                <SectionTitle>What are Macros?</SectionTitle>
            </div>
            <Paragraph>
                Macros are short for macronutrients. They are the nutrients that your
                body needs in large amounts, specifically carbohydrates, fat, and
                protein.
            </Paragraph>
            <Paragraph>
                Calorie & macro counting is a way of tracking your intake of macros.
                This can be helpful for people who are trying to lose weight, gain
                muscle, or improve their overall health.
            </Paragraph>
            <div style={containerStyle}>
                <div style={imageContainerStyle}>
                    <h1>Before FitGuide</h1>
                    <img src={weakCat} alt="Before FitGuide" style={imageStyle} />
                </div>
                <div style={imageContainerStyle}>
                    <h1>6 Months After Using FitGuide</h1>
                    <img src={strongCat} alt="6 Months After Using FitGuide" style={imageStyle} />
                </div>
            </div>
            <div>
                <SectionTitle>
                    Physical Activity Guidelines for Americans (PAG)
                </SectionTitle>
            </div>
            <Paragraph>
                The Physical Activity Guidelines for Americans (PAG) are published by
                the U.S. Department of Health and Human Services (HHS). These guidelines
                are recommendations for how much physical activity adults and children
                should do each week. The guidelines are based on scientific evidence and
                are designed to help people improve their health and reduce their risk
                of chronic diseases.
            </Paragraph>
            <List>
                <ListItem>The PAG for adults are as follows:</ListItem>
                <SubListItem>
                    Adults should do at least 150 minutes of moderate-intensity aerobic
                    activity or 75 minutes of vigorous-intensity aerobic activity each
                    week.
                </SubListItem>
                <SubListItem>
                    Adults should also do muscle-strengthening activities that work all
                    major muscle groups (legs, hips, back, abdomen, chest, shoulders, and
                    arms) on two or more days a week.
                </SubListItem>
            </List>
            <List>
                <ListItem>The PAG for children and adolescents are as follows:</ListItem>
                <SubListItem>
                    Children and adolescents aged 6–17 years should have 60 minutes (1
                    hour) or more of physical activity each day. Of that 60 minutes, at
                    least 30 minutes should be moderate-to-vigorous-intensity aerobic
                    activity.
                </SubListItem>
                <SubListItem>
                    Children and adolescents should also do muscle-strengthening
                    activities that work all major muscle groups (legs, hips, back,
                    abdomen, chest, shoulders, and arms) on two or more days a week.
                </SubListItem>
            </List>
            <Link to="/signup">
                <div css={centerButtonStyle}>
                    <button style={buttonStyle}>Sign Up Now!</button>
                </div>
            </Link>
        </PreviewPageContainer>
    );
}
export default PreviewPage;