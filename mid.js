const onSubmit = async (e) => {
  e.preventDefault();
const userData = {
  name,
  age,
  email,
  pwd,
  role
}
const response = await fetch(
  "http://localhost:5000/api/user",
  {
    method:"POST",
    headers:{
    "Content-Type":"application/json"
    },
    body:JSON.stringify(userData)
  }
)
 const data = await response.json()
 console.log(data);
 return data;
}

const getUsers = async () => {
  const response = await fetch (
  "http://localhost:5000/api/user",
)
 const data = await response.json()
 console.log(data);
 return data ;
}

const getUserById = async () => {
  const response = await fetch(
    `http:localhost:5000/api/users/${id}`,
  )
  const data = await response.json();
  console.log(data);
  return data;
}
