import React from 'react'
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import User from "../context/context";
const home = () => {
  const navigate = useNavigate();
  const values = useContext(User);
  const handleSubmit = (e) =>{
    e.preventDefault();
    const fdata = new FormData(e.target);
    const {name,rollno} = Object.fromEntries(fdata); 
    values.setCurrentUser({name,rollno});
    navigate("/quiz-page");
  };
  return (
    
    <div className='min-h-screen p-5 flex flex-col'>
      <div className='mx-auto my-10 p-5 flex items-center flex-col container max-w-[800px] border min-h-full rounded'>
        <div className='font-semibold text-3xl text-center text-green-500 flex flex-col w-full md:flex-row items-center justify-between gap-5'><div className='text-green-500'>Welcome to Quiz App</div>
        <div className='font-semibold whitespace-nowrap flex'><Link to="/leaderboard" className='flex items-center hover:bg-green-500 hover:text-white rounded p-2'>LeaderBoard<ArrowRight/></Link></div>
        </div>
        <form onSubmit={handleSubmit} className='grid w-full gap-4'>
          <div className='flex flex-col'>
            <label>Enter Your Name:</label>
            <input name="name" className='border rounded outline-none p-1 text-lg' type="text" />
          </div>
          <div className='flex flex-col'>
            <label>Enter Your RollNo:</label>
            <input name="rollno" className='border rounded outline-none p-1 text-lg' type="text" />
          </div>
          <button className='text-xl bg-green-500 text-white rounded p-2 hover:bg-green-600'>
            Start
          </button>
        </form>
      </div>
    </div>
  )
}

export default home