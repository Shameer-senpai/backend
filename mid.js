const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const submitbtn = document.getElementById("submitbtn").value;
const email = document.getElementById("email").value;
const pwd = document.getElementById("pwd").value;
const role = document.getElementById("role").value;
submitbtn.addEventListener("click",
    async (e)=>{
      e.preventDefault();
     const info = {
       name,
       age,
       submitbtn,
       email,
       pwd,
       role
     };
     const response = await fetch(
      "http://localhost:5000/api/user",{
         method : "POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify(info)
      }
     )  
      const data = await response.json();
      console.log(data);
    }
   );
