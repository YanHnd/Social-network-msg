import React from 'react'
import useSignUp from './useSignUp'
import validation from './validation'
import logo from '../img/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

const SignUp = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useSignUp(submitForm, validation)

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className='bg-gray-300 p-4 rounded-lg  shadow-xl '>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <div className='flex justify-center items-center text-gray-100 text-4xl'>
                            <h2 className='pb-12 text-gray-400'> Authentifiez-vous</h2>
                        </div>
                        <div>
                            <div className='grid grid-cols-2 space-x-4'>
                                <div className='flex space-x-4 justify-center items-center border border-blue-400 p-2 rounded-lg'>
                                    <FcGoogle size={20} />
                                    <button className='text-blue-400  '>
                                        <span>Google</span>
                                    </button>
                                </div>
                                <div className='flex space-x-4 text-blue-400 justify-center items-center border  border-blue-400 p-2 rounded-lg'>
                                    <FaFacebook size={20} />
                                    <button className='text-blue-400 '>
                                        <span>Facebook</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className=' p-8 flex items-center justify-center text-gray-400 text-2xl '>Entrer vos identifiant</div>

                            <div className='grid grid-rows-2 gap-4 text-gray-300'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='p-4'>
                                        <input
                                            className='w-full p-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='firstN'
                                            type='firstN'
                                            name='firstN'
                                            placeholder='Nom'
                                            value={values.firstN}
                                            onChange={handleChange}
                                        />
                                        {errors.firstN && <p className='text-red-500'>{errors.firstN}</p>}
                                    </div>

                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='lastN'
                                            type='lastN'
                                            name='lastN'
                                            placeholder='Prénom'
                                            value={values.lastN}
                                            onChange={handleChange}
                                        />
                                        {errors.lastN && <p className='text-red-500'>{errors.lastN}</p>}
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='pseudo'
                                            type='pseudo'
                                            name='pseudo'
                                            placeholder='pseudo'
                                            value={values.pseudo}
                                            onChange={handleChange}
                                        />
                                        {errors.pseudo && <p className='text-red-500'>{errors.pseudo}</p>}
                                    </div>

                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='email'
                                            type='email'
                                            name='email'
                                            placeholder='email'
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p className='text-red-500'>{errors.email}</p>}
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='password'
                                            type='password'
                                            name='password'
                                            placeholder='Mot de passe'
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <p className='text-red-500'>{errors.password}</p>}
                                    </div>
                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='password2'
                                            type='password'
                                            name='password2'
                                            placeholder='Confirmez votre mot de passe'
                                            value={values.password2}
                                            onChange={handleChange}
                                        />
                                        {errors.password2 && <p className='text-red-500'>{errors.password2}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='p-4 flex flex-row-reverse place-items-end'>
                                <button className='bg-blue-800 hover:bg-white text-gray-100  hover:text-blue-800 font-bold py-2 px-8 rounded-lg' type='submit'>
                                    sign Up
                                </button>

                                <a href='#' className='p-4 text-gray-600 font-sans'>
                                    Avez vous deja un compte
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className=' flex flex-col  items-center justify-center border-l-4 '>
                        <img src={logo} alt='' width='300px' />
                        <ul className='text-gray-600 font-mono text-xl flex flex-col justify-center items-center pt-12 pl-2'>
                            <li className=''>Vous etes sur le point de vivre une experience</li>
                            <li> exceptionnelle ,</li>
                            <li className=''> d'abord authentifiez vous!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
