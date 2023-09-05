import React from "react";
import { useLocation } from "react-router-dom";
import { VideoBackground } from "../styled-components/SavedPlans-Style";
import savedVideo from '../assets/savedVideo.mp4';

const  SavedPlans = () =>  {
    // const {state} = useLocation();
    // console.log('state from saved plans --> ',state);
    // // const {addMacros} = state;
    // console.log('data from saved plans --->', addMacros);

    // const {email, macrosData, username} = addMacros
    
    return (
        <div>
            <VideoBackground autoPlay loop muted>
        <source src={savedVideo} type="video/mp4" />
      </VideoBackground>
          {/* <h1>hello, {username}</h1> */}
          <h1>Welcome Back!</h1>
        </div>
      );
    };
    
    export default SavedPlans;