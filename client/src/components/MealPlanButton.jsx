import { useMutation } from "@apollo/client";
import { useState } from 'react'
import {MUTATION_MESSAGE} from '../utils/mutations';
//import {profileData} from login info from database

//used to test the prompt
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
    const [response, setResponse] = useState('');
    
  const [chat2, {error}] = useMutation(MUTATION_MESSAGE);

  const handleButtonClick = async (event)=>{
    event.preventDefault();
    const {data} = await chat2({
      variables: {message:`Based on the macros from my ${JSON.stringify(profileData)}, generate this weeks meal plan. Please return as a bulleted list with recommended serving sizes per meal with days of the week.`}
    });
    // setResponse(JSON.stringify(data));
    setResponse(data.chat2.message);
  }

  return (
    <div>
    <button onClick={handleButtonClick}>Calculate 7-Day Meal Plan</button>
    <section className="message">
        <ul>{response.split("\n\n").map(item => {
            return <li key={item}>{item}</li>
        })}</ul>
    </section>
    </div>
  )
}

export default MealPlanButton;