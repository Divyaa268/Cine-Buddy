import React, { useEffect } from 'react'
// import img1 from '../cineBuddyLogo.png'
import img2 from '../cblogo11.png'
import img3 from '../popcornFace.png';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'


const Header = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const user = useSelector(store => store.user)

  const handleSignOut = () => {

    signOut(auth)
    .then(() => {
     
      // Sign-out successful
      // navigate("/");
    })
    .catch((error) => {
      // An error happened.
      navigate("/error")
    }
    );
  }

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        // const uid = user.uid;
        dispatch(addUser({ uid: uid, email:email, displayName:displayName}));
        
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        
      }
    });

    return () => unsubscribe();
  }, 
  [] )


  return (
    <div className="absolute px-6 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      
      <img className="w-52"
      src={img2} alt="logo" />

    {user && (
      <div className='flex p-2'>
        <img
        className='w-20 h-22'
          // src='https://occ-0-748-1001.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
          src = {img3} 
          alt='User Logo'
          />

      <button onClick={handleSignOut} className='bg-red-700 rounded-lg text-white w-20 h-20 font-semibold'>Sign Out</button>

      </div>
    )}
    </div>
  )
}

export default Header
