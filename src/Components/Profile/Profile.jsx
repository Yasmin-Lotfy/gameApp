import React from 'react'

export default function Profile({userTokenProfile}) {
    console.log(userTokenProfile)
    let {first_name, last_name, age, email}= userTokenProfile;

  return (
    <>
    <div className="user py-5 my-5 m-auto rounded-5 w-75 bg-gradient text-start px-5 ">
        <p className='fs-2'>User Name : {first_name}{last_name}</p>
        <p className='fs-2'>User Email : {email}</p>
        <p className='fs-2'>User Age : {age}</p>
    </div>
    
    </>
  )
}
