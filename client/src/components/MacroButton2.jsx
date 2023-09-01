import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  MacroButton2Container,
  CalculateButton2,
  MessageSection2,
} from "../styled-components/MacroButton2-Style";
import { MUTATION_CHAT2 } from "../utils/mutations";
import auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";

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



const MacroButton2 = (props) => {
  const [response, setResponse] = useState("");

  const [chat2, { error }] = useMutation(MUTATION_CHAT2);
  const { loading, data:userData } = useQuery(QUERY_ME, { fetchPolicy: "no-cache" });
  const user = userData?.me || {};
  console.log(user);

  const handleButtonClick = async (event) => {
    const token = auth.loggedIn() ? auth.getToken() : null;
    console.log(token);

    let messagePrompt;
    if (token) {
      messagePrompt = `I am a ${user.profile[0].age} years old. I am a ${user.profile[0].gender} that weighs ${user.profile[0].weight} pounds and I am ${user.profile[0].height} inches tall. I have ${user.profile[0].diet} diet and I have a ${user.profile[0].activity} exercise level. This is my ${user.profile[0].goal}. Ignore all other details. Please generate my macros using this information and be as specific as possible.`;
    } else {
      messagePrompt = `I am a new user and I would like to generate my macros.`;
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
    setResponse(data.chat2.messageBody);
    console.log(data.chat2.messageBody);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Calculate My Macros</button>
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

export default MacroButton2;

