const userName = document.getElementById("name");
const userAge = document.getElementById("age");
const submitbtn = document.getElementById("submitbtn");
const userEmail = document.getElementById("email");
const userPwd = document.getElementById("pwd");
const userRole = document.getElementById("role");
submitbtn.addEventListener("click",
    async ()=>{
     const info = {
        name:userName.value,
        age:userAge.value,
        email:userEmail.value,
        pwd:userPwd.value,
        role:userRole.value
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
