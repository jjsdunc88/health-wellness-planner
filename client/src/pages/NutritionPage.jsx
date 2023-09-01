import React, { useState } from "react";
import {
  NutritionPageContainer,
  NutritionHeading,
} from "../styled-components/NutritionPage-Style";
import MacroButton2 from "../components/MacroButton2";
import MealPlanButton from "../components/MealPlanButton";
import WorkoutButton from "../components/WorkoutButton";

import nutritionBackground from "../assets/nutrition-background.jpg"; 

export default function NutritionPage() {
  const [containerWidth, setContainerWidth] = useState("50%"); 
  const [containerHeight, setContainerHeight] = useState("50vh"); 

  const handleHorizontalResize = (e, direction, ref) => {
    setContainerWidth(`${ref.style.width}`);
  };

  const handleVerticalResize = (e, direction, ref) => {
    setContainerHeight(`${ref.style.height}`);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden", 
        backgroundImage: `url(${nutritionBackground})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center", 
        alignItems: "flex-start", 
      }}
    >
      <div
        style={{
          margin: "50px",
          width: containerWidth,
          height: containerHeight,
          border: "1px solid #ccc",
          borderRadius: "15px",
          resize: "both",
          overflow: "auto",
          backgroundColor: "#f5f5f5",
          padding: "20px 0 0 0",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            bottom: "0",
            right: "0",
            cursor: "se-resize",
            marginTop: "20px",
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener("mousemove", handleHorizontalResize);
            document.addEventListener("mouseup", () =>
              document.removeEventListener("mousemove", handleHorizontalResize)
            );
          }}
        ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "auto",
            padding: "10px",
          }}
        >
          <pre>
            <NutritionPageContainer>
              <NutritionHeading>Nutrition Page</NutritionHeading>
              <MacroButton2 />
              <MealPlanButton />
              <WorkoutButton />
            </NutritionPageContainer>
          </pre>
        </div>
        <div
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            bottom: "0",
            right: "0",
            cursor: "se-resize",
            marginTop: "20px",
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            document.addEventListener("mousemove", handleVerticalResize);
            document.addEventListener("mouseup", () =>
              document.removeEventListener("mousemove", handleVerticalResize)
            );
          }}
        ></div>
      </div>
    </div>
  );
}
