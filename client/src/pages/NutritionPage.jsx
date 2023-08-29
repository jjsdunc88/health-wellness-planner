import React from "react";
import {
  NutritionPageContainer,
  NutritionHeading,
} from "../styled-components/NutritionPage-Style";
import MacroButton2 from "../components/MacroButton2";
import MealPlanButton from "../components/MealPlanButton";
import WorkoutButton from "../components/WorkoutButton";

export default function NutritionPage() {
  return (
    <NutritionPageContainer>
      <NutritionHeading>Nutrition Page</NutritionHeading>
      <MacroButton2 />
      <MealPlanButton />
      <WorkoutButton />
    </NutritionPageContainer>
  );
}
