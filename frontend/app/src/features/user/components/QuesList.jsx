import React from 'react'
import MultipleChoice from './MutipleChoice'

const QuesList = ({data}) => {
  return (
    <div  className='flex flex-col p-1 gap-4 w-full h-3/4  bg-gray-700  overflow-y-scroll scroll-smooth'>



        

{data.length >2 && data.map((que)=>(
    <MultipleChoice key={que.id} question={que.question} options={que.options} name={que.category} image={false}/>
))}
    


    </div>
  )
}

export default QuesList;