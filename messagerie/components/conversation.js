import React from 'react'
import Send from '../others/send'
import me from '../../img/me.jpg'
import rcv from '../../img/receiver.jpg'
import msgg from '../../img/Logo.png'

import Msgcontent from '../components/msgcontent'

import BDisp from '../buttons/bdisp'
import Bonline from '../buttons/bonline'
import Dropmenu from '../others/dropmenu'
// import { renderIntoDocument } from 'react-dom/test-utils'

const Conversation = (props) => {

    return (

        props.cnvslctd == "yes" ?
            <div className="flex w-4/6">

                <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                    <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                        <div className="flex items-center space-x-4">
                            <img src={rcv} alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
                            <div className="flex flex-col leading-tight">
                                <div className="text-2xl mt-1 flex items-center">
                                    <span className="text-gray-700 mr-3">{props.name}</span>
                                    <Bonline />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            {/* <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                    <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                    </button> */}
                            <div className="flex relative text-left">
                                {
                                    props.grp == "yes" ?
                                        <BDisp /> : <p></p>
                                }
                                <div class="mt-1.5 ml-2">
                                    <Dropmenu />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 p-3 overflow-y-scroll scrollbar">

                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gradient-to-r from-purple-700 via-blue-600 to-blue-400 text-white ">Salut</span></div>
                            </div>
                            <img src={me} alt="My profile" className="w-6 h-6 rounded-full order-2" />
                        </div>
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Coucou</span></div>
                                <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Comment tu vas ?</span>
                                </div>
                            </div>
                            <img src={rcv} alt="My profile" className="w-6 h-6 rounded-full order-1" />
                        </div>
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gradient-to-r from-purple-700 via-blue-600 to-blue-400 text-white ">Ça va bien et toi ?</span>
                            </div>
                            <img src={me} alt="My profile" className="w-6 h-6 rounded-full order-2" />
                        </div>
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Ça va très bien, merci.</span></div>
                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">On organise quelque chose demain au département si tu veux venir !</span></div>
                            </div>
                            <img src={rcv} alt="My profile" className="w-6 h-6 rounded-full order-1" />
                        </div>
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <div><span className="px-4 py-2 rounded-lg inline-block bg-gradient-to-r from-purple-700 via-blue-600 to-blue-400 text-white ">Quel genre de chose ?</span></div>
                            </div>
                            <img src={me} alt="My profile" className="w-6 h-6 rounded-full order-2" />
                        </div>
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">C'est une surprise 😄</span></div>
                                <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">En tous cas il y aurait du monde, et t'es le bienvenu</span></div>
                            </div>
                            <img src={rcv} alt="My profile" className="w-6 h-6 rounded-full order-1" />
                        </div>
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-gradient-to-r from-purple-700 via-blue-600 to-blue-400 text-white ">Ahh merci ! j'ai hâte d'y être</span></div>

                            </div>
                            <img src={me} alt="My profile" className="w-6 h-6 rounded-full order-2" />
                        </div>

                        {/* <Msgcontent sent="yes"/> */}
                    </div>

                    <Send />
                </div>

            </div> :
            <img src={msgg} className="flex w-4/6 rounded-full" />



    )
}

export default Conversation