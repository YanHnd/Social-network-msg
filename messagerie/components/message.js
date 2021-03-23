import React from 'react'
const Message = (props) => {

    return (
        <div className="flex flex-col font-medium px-2 py-2 mb-2 text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded">
            <a href="#">
                <div className="flex flex-row justify-between">
                    <img alt='profile pic' className="rounded-full h-10 w-10 ml-2" src={props.img} />
                    <div className="">{props.time}</div>
                </div>
                <div className="flex flex-row justify-around">
                    <div className="font-bold text-base">{props.name}</div>
                    <div className="text-gray-600 text-sm w-full pl-5">{props.content}</div>
                </div>
            </a>
        </div>
    )

}

export default Message