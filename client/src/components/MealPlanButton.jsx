// MealPlanButton.jsx
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  MealPlanButtonContainer,
  CalculateMealPlanButton,
  MealPlanMessageSection,
} from "../styled-components/MealPlanButton-Style";
import { MUTATION_CHAT2 } from "../utils/mutations";

// Used to test the prompt
const profileData = {
  'age': 25,
  'height': 72,
  'weight': 180,
  'gender': 'male',
  'activity': 'moderate',
  'goal': 'lose',
  'diet': 'no restrictions',
};

const MealPlanButton = (props) => {
  const [response, setResponse] = useState("");

  const [chat2, { error }] = useMutation(MUTATION_CHAT2);

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const { data } = await chat2({
      variables: {
        message: `Based on the macros from my ${JSON.stringify(profileData)}, generate this week's meal plan. Please return as a bulleted list with recommended serving sizes per meal with days of the week.`,
      },
    });
    setResponse(data.chat2.message);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Calculate 7-Day Meal Plan</button>
      <section className="message">
        {response ? (
          <ul>{response.split("\n\n").map(item => {
            return <li key={item}>{item}</li>
          })}</ul>
        )
          : (
            <div id="modal-1" class="jw-modal" style={{
              "display": "block",
              "position": "fixed",
              "z-index": "10000",
              "backgroundColor": "rgba(0, 0, 0, .75)",
              "width": "300px",
              "height": "300px",
              "top": "50%",
              "left": "50%",
              "transform": "translate(-50%, -50%)"
            }}>
              <div class="jw-modal-body" style={{ "margin": "auto", "width": "50%" }}>
                <h1 style={{ "textAlign": "center" }}>Loading...</h1>
              </div>
            </div>)
        }
      </section>;
    </div>
  );
}



export default MealPlanButton;
