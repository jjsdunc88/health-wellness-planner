import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import {
//   MacroButton2Container,
//   CalculateButton2,
//   MessageSection2,
// } from "../styled-components/MacroButton2-Style";
import { MUTATION_CHAT2 } from "../utils/mutations";

// Used to test the prompt
const profileData = {
  'age': 25,
  'height': 72,
  'weight': 180,
  'gender': 'male',
  'activity': 'moderate',
  'goal': ' weight loss',
  'diet': 'no restrictions',
};

const WorkoutButton = (props) => {
  const [response, setResponse] = useState("");

  const [chat2, { error }] = useMutation(MUTATION_CHAT2);

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const { data } = await chat2({
      variables: {
        message: `I am a ${profileData.age} years old. I am a ${profileData.gender} that weighs ${profileData.weight} pounds and I am ${profileData.height} inches tall. I have ${profileData.diet} diet and I have a ${profileData.activity} exercise level. This is my ${profileData.goal}. Please generate a daily workout routine based on my goals and current activity level.`,
      },
    });
    // console.log(message);
    // setResponse(JSON.stringify(data));
    setResponse(data.chat2.message);
  };

  return (
    <div>
    <button onClick={handleButtonClick}>Calculate Workout Plan</button>
    <section className="message">
    {response ? (
        <pre>{response}</pre>
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
        }    </section>
    </div>
  )
};

export default MacroButton2;
