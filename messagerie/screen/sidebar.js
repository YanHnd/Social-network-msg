import React from 'react'
import Person from '../components/person'
import SearchP from '../components/searchP'
import Messages from '../components/messages'
import BAvailable from '../buttons/bavailable'

const Sidebar = () => {
    return (
        <div className="pt-5 w-2/6">
            <div className="grid place-items-center">
                <Person name="Me" />
                <BAvailable />
                <SearchP />
            </div>
            <Messages />
        </div>
    );
}

export default Sidebar;