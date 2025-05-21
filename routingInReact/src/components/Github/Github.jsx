import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  
  // const [follower , setFollower] = useState(0)
  // const [img , setImg] = useState('')
  
  // useState(()=>{
    //   const fetchData = () =>{
      //     try{
        //       fetch('https://api.github.com/users/vaibhav211960')
        //       .then(res => res.json())
        //       .then(data => {
          //         setFollower(data.followers)
          //         setImg(data.avatar_url)
          //       })
          //     }catch{
            //       throw new Error("problem to fetch follwer")
            //     }
            // }
            
            // fetchData()
            // },[follower])
            const data = useLoaderData()
            
  return (
    <>
      <div className='bg-gray-500 text-white text-2xl text-center py-4 font-semibold'>your followers : {data.followers} 

      <img src={data.avatar_url} alt="myPhoto"
        className='w-[20%]'
      />
      </div>
      
    </>
  )
}

export default Github