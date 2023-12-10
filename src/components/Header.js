import React from 'react'
import img1 from '../cineBuddyLogo.png'

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-rose-600">
      
      <img className="w-48"
      src={img1} alt="logo" />
    </div>
  )
}

export default Header
