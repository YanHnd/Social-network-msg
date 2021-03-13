import React from 'react'
import BLogo from '../buttons/blogo.js'
import BFriends from '../buttons/bfriends'
import BDiscuss from '../buttons/bdiscuss.js'

const Navbar = () => {
    return (
        <div className="flex flex-col justify-between w-16 border-r bg-white">
            <BLogo />
            <div className="flex flex-col mb-60">
                <BFriends />
                <BDiscuss />
            </div>
        </div>
    )
}

export default Navbar;