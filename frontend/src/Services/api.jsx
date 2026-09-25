async function checkBackendStatus(){
  const response=await fetch("http://localhost:3000/api/test");

  if(!response.ok){
    throw new Error("Error through Backend");
  }

  return await response.json();
}

export async function uploadPDFs(files){
  
}

export default checkBackendStatus;