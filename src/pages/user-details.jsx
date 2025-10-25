import React from 'react'
import { useContext } from 'react';
import User from "../context/context";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const userdetails = () => {
  const values = useContext(User);
  return (
    <div className='min-h-screen p-5'>
      <div className='mx-auto my-10 p-5 grid place-items-center gap-5 items-center container max-w-[800px] rounded shadow-lg'>
        <div className="text-3xl font-semibold text-green-500"> Quiz Results</div>
        <div className="grid text-xl gap-5 w-full text-center">
            <div className='flex flex-col gap-3'><div className='font-bold'>Player Name </div><div>{values.currentUser.name}</div></div>
            <div className='flex flex-col gap-3'><div className='font-bold'>Player RollNo </div><div>{values.currentUser.rollno}</div></div>
            <div className='flex flex-col gap-3'><div className='font-bold'>Score Out Of {30} </div><div>{values.currentUser.score}</div></div> 
        </div>
          <div className='font-semibold whitespace-nowrap flex'><Link to="/leaderboard" className='flex items-center hover:bg-green-500 hover:text-white rounded p-2'>LeaderBoard<ArrowRight/></Link></div>
      </div>
    </div>
  )
}

export default userdetails