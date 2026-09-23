import {useState,useEffect} from "react";
import setbackendStatus from "../Services/api.jsx";

function BackendStatus(){
  const [status,setStatus]=useState(" ");

  useEffect(()=>{
      async function backend(){
        try{
          await setbackendStatus();
          setStatus("Backend Connected");
        }
        catch(error){
          setStatus("Backend Not Connected",error)
        }
      }

      backend();
  }, [])
  
  return(
    <div className="Backend-status">
      <h3>
        {status}
      </h3>
    </div>
  );
}

export default BackendStatus;
