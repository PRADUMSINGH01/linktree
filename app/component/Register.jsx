"use client"
import {useState} from 'react'
import {AddData} from "../module/AddUser";
import {CheckUserAccount} from '../module/CheckUserAccout'
import HashPassword from '../module/HashPassword'
export default function Register() {

  const [alert ,setalert] = useState('')
const [formData,setformData] = useState({

  name:"",
  email:"",
  password:""
})

function HandleChange(e) {
  const { name, value } = e.target; // Correct destructuring
  setformData((items) => ({ ...items, [name]: value })); // Update state
}


async function Submit(){

console.log(formData)
const hashPassword =await HashPassword(formData.password)
try{
  const IsCheckUserAccount = await CheckUserAccount(formData.email)
if(IsCheckUserAccount.success===true){

  const Isdataadded = await AddData(formData.name,formData.email,hashPassword)
  if(Isdataadded.success===true){
    setalert(Isdataadded.msg)
  }else{
    setalert(Isdataadded.msg)
  }
}else{
  setalert(IsCheckUserAccount.msg)
}

}catch{
  setalert("Some issue occur... ")
}
setTimeout(() => {
  setalert(false)
}, 3000);
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {
        alert?
        <div className="absolute bg-black text-white top-0 h-20 px-5 py-5 uppercase">{alert}</div>
      :""}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Register
        </h2>
        <form action={Submit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name" 
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e)=>HandleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email" 
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e)=>HandleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password" 
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e)=>HandleChange(e)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
