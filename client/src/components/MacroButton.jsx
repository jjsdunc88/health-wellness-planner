import { useQuery } from "@apollo/client";
import { useState } from 'react'
import {QUERY_MESSAGE} from '../utils/queries';
// import { resolvers } from "../../../server/schemas/resolvers";

const MacroButton = (props) => {
    const [response, setResponse] = useState('');
    
  const { loading, data } = useQuery(QUERY_MESSAGE, {
    variables:{message:"Can you calculate my macros?"}
  });

  const messageFromBack = data?.chat || { message: "Not working" };

  const handleButtonClick = ()=>{
    resolvers.Query.chat();
    return setResponse(messageFromBack.message);
  }

  return (
    <div>
    <button onClick={handleButtonClick}>Calculate Macros</button>
    <section className="message">
      { loading ? (
        <h1> loading </h1>
      ) : (
        <h1>{messageFromBack.message}</h1>
      )}
    </section>
    </div>
  )
}

export default MacroButton;