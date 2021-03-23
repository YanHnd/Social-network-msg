import React from 'react'

const Upload = () => {

    return (
        <div className="bg-gray-200 font-sans">
            <div className="flex flex-col sm:flex-row sm:justify-around">
                <div className="w-full h-screen bg-white">

                    <div className="">

                        <button className="w-full flex justify-between items-center py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-900 focus:outline-none">
                            <span className="flex items-center">

                                <span className="mx-4 font-medium">Pictures</span>
                            </span>

                            <span>
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </button>
                        <div />

                        <div className="mt-4">

                            <button className="w-full flex justify-between items-center py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-900 focus:outline-none">
                                <span className="flex items-center">

                                    <span className="mx-4 font-medium">Files</span>
                                </span>

                                <span>
                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>
                            </button>
                            <div />

                            <div className="mt-4">

                                <button className="w-full flex justify-between items-center py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-900 focus:outline-none">
                                    <span className="flex items-center">

                                        <span className="mx-4 font-medium">Links</span>
                                    </span>

                                    <span>
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>

                                        </svg>
                                    </span>

                                </button>

                                <div className="mt-4">

                                    <button className="w-full flex justify-between items-center py-3 px-6 text-gray-600 cursor-pointer hover:bg-gray-300 hover:text-gray-900 focus:outline-none">
                                        <span className="flex items-center">

                                            <span className="mx-4 font-medium">Search in conversation</span>
                                        </span>

                                        <span>
                                            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" width="512px" height="512px">
                                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>

                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Upload