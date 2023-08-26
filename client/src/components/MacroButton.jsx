import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CHAT } from "../utils/queries";
import {
  MacroButtonContainer,
  CalculateButton,
  MessageSection,
} from "../styled-components/MacroButton-Style";
// import { resolvers } from "../../../server/schemas/resolvers";

const MacroButton = (props) => {
  const [response, setResponse] = useState("");

  const { loading, data } = useQuery(QUERY_CHAT, {
    variables: { message: "Can you calculate my macros?" },
  });

  const messageFromBack = data?.chat || { message: "Not working" };

  const handleButtonClick = () => {
    // resolvers.Query.chat();
    return setResponse(messageFromBack.message);
  };

  return (
    <MacroButtonContainer>
      <CalculateButton onClick={handleButtonClick}>
        Calculate Macros
      </CalculateButton>
      <MessageSection className="message">
        {loading ? (
          <h1>loading</h1>
        ) : (
          <h1>{messageFromBack.message}</h1>
        )}
      </MessageSection>
    </MacroButtonContainer>
  );
};

export default MacroButton;