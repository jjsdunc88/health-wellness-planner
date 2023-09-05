import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  MacroButton2Container,
  CalculateButton2,
  MessageSection2,
} from "../styled-components/MacroButton2-Style";
import { MUTATION_CHAT2, MUTATION_ADDMACROS, MUTATION_CHAT2RESPONDER } from "../utils/mutations";
import auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";
import loadingGif from "../assets/loading-gif.gif";

let myMacros;

const MacroButton2 = (props) => {
  const [response, setResponse] = useState("");

  const [chat2, { error }] = useMutation(MUTATION_CHAT2, { fetchPolicy: "no-cache" });
  const [chat2Responder, { error: responderError }] = useMutation(MUTATION_CHAT2RESPONDER, { fetchPolicy: "no-cache" });

  const { loading, data: userData } = useQuery(QUERY_ME, { fetchPolicy: "no-cache" });
  const user = userData?.me || {};

  const handleButtonClick = async (event) => {
    const token = auth.loggedIn() ? auth.getToken() : null;

    let messagePrompt;
    if (token) {
      messagePrompt = `I am a ${user.profile[0].age} years old. I am a ${user.profile[0].gender} that weighs ${user.profile[0].weight} pounds and I am ${user.profile[0].height} inches tall. I have ${user.profile[0].diet} diet and I have a ${user.profile[0].activity} exercise level. This is my ${user.profile[0].goal}. Ignore all other details. Please always add --- before and --- after the macro break down. Please make sure there is a new line between each macro item. Please make sure each macro item starts with a '-'. Please include my daily caloric intake total with my macro items. Generate my macros using this information and be as specific as possible.`;
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
    const requestId = data.chat2.id;
    let maxCount = 600000;
    let count = 0;
    const responseInterval = setInterval(async () => {
      try {
        if (count < maxCount) {
          count += 10000;
          const { data:response, error:responseError } = await chat2Responder({
            variables: {
              requestId: requestId,
            },
          });
          if (!responseError) {
            clearInterval(responseInterval);
            document.querySelector(".jw-modal").style.display = "none";
            setResponse(response.chat2Responder.messageBody);
            myMacros = response.chat2Responder.messageBody.split("---")[1];
          } 
        } else {
          clearInterval(responseInterval);
        } 
      } catch (err) {
      }
    }, 10000);    
  };

  const [macros, setMacros] = useMutation(MUTATION_ADDMACROS);
  const handleSave = async (event) => {
    event.preventDefault();
    const token = auth.loggedIn() ? auth.getToken() : null;

    const { data } = await macros({
      variables: {
        macros: myMacros,
      },
    });
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "#FFA500",
          margin: "10px",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Calculate My Macros
      </button>
      <section className="message">
        {response ? (
          <pre
            style={{
              whiteSpace: "pre-wrap",
              maxWidth: "900px",
              margin: "0 auto",
              fontFamily: "calibri",
            }}
          >
            {response}
            <button onClick={handleSave} >Save Macros</button>
          </pre>

        ) : (
          <div
            id="modal-1"
            className="jw-modal"
            style={{
              display: "none",
              position: "fixed",
              zIndex: "10000",
              // backgroundColor: "rgba(0, 0, 0, .75)",
              width: "300px",
              height: "300px",
              top: "50%",
              left: "38%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="jw-modal-body"
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                width: "50%",
                position: "relative",
                zIndex: "1",
              }}
            >
              <h1 style={{ textAlign: "center", position: "relative" }}>
                <img
                  src={loadingGif}
                  alt="Loading GIF"
                  style={{ opacity: 0.5, position: "absolute", zIndex: "0" }}
                />
                <span style={{ position: "relative", zIndex: "1" }}>Loading...</span>
              </h1>
            </div>
          </div>
        )
        }
      </section>
    </div>
  );
};
export default MacroButton2;