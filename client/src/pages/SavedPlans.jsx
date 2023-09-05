import React from "react";
import { VideoBackground } from "../styled-components/SavedPlans-Style";
import savedVideo from '../assets/savedVideo.mp4';
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { MUTATION_DELETEMACROS, MUTATION_DELETEMEALPLAN, MUTATION_DELETEWORKOUT } from "../utils/mutations";

const SavedPlans = () => {
  const { data, loading } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  if (loading) return <div>Loading...</div>;

  // const [deleteMacros, {error}] = useMutation(MUTATION_DELETEMACROS);

  // const handleDeleteMacros = async () => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await deleteMacros();
  //   } catch(err) {
  //     console.error(err);
  //   }
  // }
  
  return (
    <>
      {userData && (
        <div className="message">
          {/* <VideoBackground autoPlay loop muted>
            <source src={savedVideo} type="video/mp4" />
          </VideoBackground> */}
          <h2>Welcome Back, {userData.username}!</h2>
            <pre
            style={{
              whiteSpace: "pre-wrap",
              maxWidth: "900px",
              margin: "0 auto",
              fontFamily: "calibri",
              }}
            >
              {userData.macrosData.myMacros}
              {userData.mealPlanData.myMealPlans}
              {userData.workoutData.myWorkouts}
            </pre>
        </div>
      )};
    </>
  )
};

export default SavedPlans;