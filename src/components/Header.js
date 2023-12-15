import React from 'react'
// import img1 from '../cineBuddyLogo.png'
import img2 from '../cblogo11.png'
import img3 from '../popcornFace.png'

const Header = () => {
  return (
    <div className="absolute px-6 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      
      <img className="w-52"
      src={img2} alt="logo" />

      <div className='flex p-2'>
        <img
        className='w-20 h-22'
          // src='https://occ-0-748-1001.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
          src = {img3} 
          alt='User Logo'
          />

      <button className='bg-red-700 rounded-lg text-white w-20 h-20 font-semibold'>Sign Out</button>

      </div>

    </div>
  )
}

export default Header
