import React from 'react'

const users=[
  {
    name:"example",
    age:10,
    rollno:2325334,
    score:10
  },
  {
    name:"example",
    age:10,
    rollno:2325334,
    score:10
  },
  {
    name:"example",
    age:10,
    rollno:2325334,
    score:10
  },
  {
    name:"example",
    age:10,
    rollno:2325334,
    score:10
  },
  {
    name:"example",
    age:10,
    rollno:2325334,
    score:10
  }
];

const leaderboard = () => {
  return (
    <div className='min-h-screen p-5'>
      <div className='p-5 grid place-items-center gap-5 items-center container max-w-[800px] mx-auto my-10 shadow-lg rounded'>
        <div className="text-3xl font-semibold text-green-500"> Quiz App LeaderBoard</div>
        <div className="grid w-full text-center">
              <div className="font-semibold text-lg grid grid-cols-5 border-b-3 pb-3">
                <div>#</div>
                <div>NAME</div>
                <div>ROLL NO</div>
                <div>AGE</div>
                <div>SCORE</div>
              </div>
          {users.map((user,ind)=>{
            return (
              <div className="grid grid-cols-5 border-b-3 p-3">
                <div>{ind+1}</div>
                <div>{user.name}</div>
                <div>{user.rollno}</div>
                <div>{user.age}</div>
                <div>{user.score}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default leaderboard