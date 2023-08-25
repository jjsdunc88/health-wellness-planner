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
  'goal': ' weight loss',
  'diet': 'no restrictions',
};

const MacroButton2 = (props) => {
    const [response, setResponse] = useState('');
    
  const [chat2, {error}] = useMutation(MUTATION_MESSAGE);

  const handleButtonClick = async (event)=>{
    event.preventDefault();
    const {data} = await chat2({
      variables: {message:`I am a ${profileData.age} years old. I am a ${profileData.gender} that weighs ${profileData.weight} pounds and I am ${profileData.height} inches tall. I have ${profileData.diet} diet and I have a ${profileData.activity} exercise level. This is my ${profileData.goal}. Ignore all other details. Please generate my macros using this information and be as specific as possible.`}
    });
    // console.log(message);
    // setResponse(JSON.stringify(data));
    setResponse(data.chat2.message);
  }

  return (
    <div>
    <button onClick={handleButtonClick}>Calculate Macros</button>
    <section className="message">
        <h1>{response}</h1>
    </section>
    </div>
  )
}

export default MacroButton2;