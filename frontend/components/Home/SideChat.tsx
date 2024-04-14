'use client'
import React, { useState } from 'react'
// import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import Swal from 'sweetalert2'
import Link from 'next/link'

const SideChat = () => {
  // const [dropDown, setDropDown] = useState(false);

 

  const {data:session,status} = useSession();
  console.log(session?.user?.image)

  const handleSignout = ()=>{
    Swal.fire({
      title:"Are you sure want to logout?",
      text:"You must login again to text!",
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log me out!'
    }).then((result)=>{
      if(result.isConfirmed){
        signOut({callbackUrl:'/'})
        Swal.fire({
          title:"Signed Out!",
          text:"You have Logged out sucessfully!",
          icon:'success',
        })

      }
    })
  }
  return (
    <>
     <div className="w-1/4 bg-white border-r border-gray-300">
        <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
          {/* Single Chat */}
          <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md" >
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
              <img
                src={session?.user?.image ?? '/default-avatar.png'} 
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{session?.user?.name}</h2>
              <p className="text-gray-600">{session?.user?.email}!!</p>
            </div>
            {status === 'authenticated' ? (
            <button  onClick={handleSignout} className="text-white bg-stone-600 p-4  rounded-xl">Log out</button>
          ) : (
            <Link href={'/'}><button  className="text-blue-500">Sign In</button></Link>
          )}
          <div>
        </div>
          
          </div>

        </div>
      </div>
    </>
  )
}

export default SideChat