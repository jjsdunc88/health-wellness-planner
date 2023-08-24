import { useQuery } from "@apollo/client";

import {QUERY_MESSAGE} from '../utils/queries';

function Message(props){
  const { loading, data } = useQuery(QUERY_MESSAGE, {
variables:{message:"Can you calculate my macros?"}
  });

  const messageFromBack = data?.chat || { message: "Not working" };

  const handleMacros = ()=>{

  }

  return (
    <>
    {/* <button onClick={handleMacros}>Calculate Macros</button> */}
    <section className="message">
      { loading ? (
        <h1> loading </h1>
      ) : (
        <h1>{messageFromBack.message}</h1>
      )}
    </section>
    </>
  )
}

export default Message;