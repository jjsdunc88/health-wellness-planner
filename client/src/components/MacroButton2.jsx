import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  MacroButton2Container,
  CalculateButton2,
  MessageSection2,
} from "../styled-components/MacroButton2-Style";
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

const MacroButton2 = (props) => {
  const [response, setResponse] = useState("");

  const [chat2, { error }] = useMutation(MUTATION_CHAT2);

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const { data } = await chat2({
      variables: {
        message: `I am a ${profileData.age} years old. I am a ${profileData.gender} that weighs ${profileData.weight} pounds and I am ${profileData.height} inches tall. I have ${profileData.diet} diet and I have a ${profileData.activity} exercise level. This is my ${profileData.goal}. Ignore all other details. Please generate my macros using this information and be as specific as possible.`,
      },
    });
    // console.log(message);
    // setResponse(JSON.stringify(data));
    setResponse(data.chat2.message);
  };

  return (
    <MacroButton2Container>
      <CalculateButton2 onClick={handleButtonClick}>
        Calculate Macros
      </CalculateButton2>
      <MessageSection2 className="message">
        <pre>{response}</pre>
      </MessageSection2>
    </MacroButton2Container>
  );
};

export default MacroButton2;
