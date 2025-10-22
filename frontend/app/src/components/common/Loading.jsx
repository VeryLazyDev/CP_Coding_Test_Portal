import React from 'react'
import Lottie from 'lottie-react'
import loading from '../../assets/loading.json'
const Loading = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
        <Lottie size={20} animationData={loading} loop={true}/>
    </div>
  )
}

export default Loading