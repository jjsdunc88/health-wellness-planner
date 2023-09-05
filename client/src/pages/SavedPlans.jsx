import React from "react";
import { VideoBackground } from "../styled-components/SavedPlans-Style";
import savedVideo from '../assets/savedVideo.mp4';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const SavedPlans = () => {
  const { data, loading, error } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      {userData && (
        <div>
          {/* <VideoBackground autoPlay loop muted>
            <source src={savedVideo} type="video/mp4" />
          </VideoBackground> */}
          <h1>Hello, {userData.username}</h1>
          <h2>Welcome Back!</h2>

          {userData.macrosData.myMacros}
          {userData.mealPlanData.myMealPlans}
          {userData.workoutData.myWorkouts}
        </div>
      )};
    </>
  )
};

export default SavedPlans;