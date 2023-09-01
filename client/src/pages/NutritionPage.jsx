import React, { useState } from "react";
import {
  NutritionPageContainer,
  NutritionHeading,
} from "../styled-components/NutritionPage-Style";
import MacroButton2 from "../components/MacroButton2";
import MealPlanButton from "../components/MealPlanButton";
import WorkoutButton from "../components/WorkoutButton";

export default function NutritionPage() {
  const [containerWidth, setContainerWidth] = useState("50%"); // Initial width
  const [containerHeight, setContainerHeight] = useState("50vh"); // Initial height

  const handleHorizontalResize = (e, direction, ref) => {
    setContainerWidth(`${ref.style.width}`);
  };

  const handleVerticalResize = (e, direction, ref) => {
    setContainerHeight(`${ref.style.height}`);
  };

  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight,
        border: "1px solid #ccc",
        resize: "both",
        overflow: "auto",
        backgroundColor: "#f5f5f5",
        padding: "20px 0 0 0",
        backgroundImage: `url('../assets/nutrition-background.jpg')`, // Add background image here
        backgroundSize: "cover", // You can adjust this property to control the image size
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
  );
}
