
async function checkBackendStatus(){
  const response=await fetch("http://localhost:3000/api/test");

  if(!response.ok){
    throw new Error("Error through Backend");
  }

  return await response.json();
}



export async function uploadPDFs(files){
  const formData=new FormData();

  for(let i=0;i<files.length;i++){
    formData.append("pdfFiles",files[i]);
  }

  const response=await fetch("http://localhost:3000/api/upload",{
    method:"POST",
    body:formData,
  })

  if(!response.ok){
    throw new Error("upload failed");
  }

  return await response.json();
}



export async function searchKeyword(keyword){
  const response=await fetch(
    `http://localhost:3000/api/search?keyword=${encodeURIComponent(keyword)}`
  );
  
  if(!response.ok){
    throw new Error("search failed no data found");
  }

  return await response.json();
}



export async function startNewSession(){
  const response=await fetch(
    "http://localhost:3000/api/new-session",{
      method:"POST"
    }
  );

  if(!response.ok){
    throw new Error("deletion failed");
  }

  return await response.json();
}


export default checkBackendStatus;