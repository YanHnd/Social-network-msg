import React from 'react'
import img from '../../img/receiver.jpg'
import Upload from '../components/upload'

const Rightbar = (props) => {

    return (

        <div className="flex flex-col py-6 w-1/5 flex-shrink-0">
            <div className="flex flex-row justify-center h-12 w-full">
                <div className="font-bold text-2xl">Shared files</div>
            </div>



            <div className="flex flex-col items-center bg-purple-100 border border-gray-200 mt-8 w-full py-6 px-4 rounded-lg">

                <img src={img} alt="img" className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
                <div className="text-sm font-semibold mt-2">{props.name}</div>



            </div>
            <div className="p-6">
            </div>
            <Upload />
        </div>


    )
}

export default Rightbar