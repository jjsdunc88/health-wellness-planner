import { useMutation } from "@apollo/client";
import { useState } from 'react'
import {MUTATION_MESSAGE} from '../utils/mutations';


const MacroButton2 = (props) => {
    const [response, setResponse] = useState('');
    
  const [chat2, {error}] = useMutation(MUTATION_MESSAGE);

  const handleButtonClick = async (event)=>{
    event.preventDefault();
    const {data} = await chat2({
      variables: {message:"Can you calculate my macros?"}
    });
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