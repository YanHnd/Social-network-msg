import React from 'react'
import logo from '../../img/Logo.png'

const BLogo = () => {
    return (
        <button>
            <img src={logo} className="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
        </button>
    )
}

export default BLogo