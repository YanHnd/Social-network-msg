import React from 'react'
import div from '../img/div.png'
import savoir from '../img/savoir.png'
import social from '../img/social.png'

const dash2 = () => {
    return (
        <div className='grid grid-cols-3 gap-4 p-24' id='dash2'>
            <div className='rounded-full flex items-center justify-center border border-gray-600 border-opacity-25 '>
                <img src={div} alt='divertissement' width='80%' />
            </div>
            <div className='rounded-full flex items-center justify-center border border-gray-600 border-opacity-25'>
                <img src={savoir} alt='savoir' width='70%' />
            </div>
            <div className='rounded-full flex items-center justify-center border border-gray-600 border-opacity-25'>
                <img src={social} alt='social' width='80%' />
            </div>
            <div className='mx-auto font-akaya text-lg font-medium '>
                <p className='p-12'>
                    Vous etes etudiant et vous voulez simplement vous amusez , quoi de mieux que de se retrouver avec des gens qui ont le meme statut que vous, c'est devenu
                    possible avec StudApp
                </p>
            </div>
            <div className='mx-auto font-akaya text-lg font-medium '>
                <p className='p-12 '>"Quand on partage des richesse on les devise mais quand on partage du savoir on le multiplie " , venez echanger des connaisance sur StudApp</p>
            </div>
            <div className='mx-auto font-akaya text-lg font-medium '>
                <p className='p-12 '>
                    Vous voulez faire de nouvelles connaissance, discuter avec vos amis etudiants et etre le premier informé des nouveauté qu il y a au campus , pas de soucis
                    StudApp est la pour vous !!
                </p>
            </div>
        </div>
    )
}

export default dash2
// #57A873
