import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  MacroButton2Container,
  CalculateButton2,
  MessageSection2,
} from "../styled-components/MacroButton2-Style";
import { MUTATION_CHAT2 } from "../utils/mutations";
import auth from "../utils/auth";

// Used to test the prompt
// const profileData = {
//   'age': 25,
//   'height': 72,
//   'weight': 180,
//   'gender': 'male',
//   'activity': 'moderate',
//   'goal': ' weight loss',
//   'diet': 'no restrictions',
// };

const WorkoutButton = (props) => {
  const [response, setResponse] = useState("");
  const { user } = useQuery(QUERY_ME);

  const [chat2, { error }] = useMutation(MUTATION_CHAT2);

  const handleButtonClick = async (event) => {
    const token = auth.loggedIn() ? auth.getToken() : null;
    console.log(token);
    
    let messagePrompt;
      if (token) {
        messagePrompt = `I am a ${user.profileData[0].age} years old. I am a ${user.profileData[0].gender} that weighs ${user.profileData[0].weight} pounds and I am ${user.profileData[0].height} inches tall. I have ${user.profileData[0].diet} diet and I have a ${user.profileData[0].activity} exercise level. This is my ${user.profileData[0].goal}. Please generate a daily workout routine based on my goals and current activity level.`;
      } else {
        messagePrompt = `I am a new user and I would like to generate a daily workout routine based on my goals and current activity level.`;
      }
    event.preventDefault();
    document.querySelector(".jw-modal").style.display = "block";
    const { data } = await chat2({      
      variables: {
        message: messagePrompt,
      },
    });
    // console.log(message);
    // setResponse(JSON.stringify(data));
    document.querySelector(".jw-modal").style.display = "none";
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
          "display": "none",
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
        </div>)}    
        </section>
    </div>
  )
};

export default WorkoutButton;
