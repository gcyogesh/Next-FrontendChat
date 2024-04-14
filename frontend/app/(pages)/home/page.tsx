import ChatBox from '@/components/Home/ChatBox'
import Header from '@/components/Home/Header'
import SideChat from '@/components/Home/SideChat'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* <Header /> */}
                <SideChat />
                <ChatBox />
            </div>

        </>
    )
}

export default page