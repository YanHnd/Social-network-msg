import React from 'react'

import Chat from './screen/chat'
import RightBar from './screen/rightbar'
import Navbar from './screen/navbar'
import Sidebar from './screen/sidebar'


const messagerie = () => {
    return (
        <div className="flex h-screen antialiased text-gray-800">
            <Navbar className="" />
            <div className="flex flex-row h-full w-full overflow-hidden">
                <Sidebar />
                <Chat />
                <RightBar name="Friend1" />
            </div>
        </div>
    )
}

export default messagerie