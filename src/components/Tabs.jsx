import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setactiveTab } from '../REDUX/feature/searchslice'

const Tabs = () => {
  const tabs=['photos','videos','GIF',]
   
const dispatch=  useDispatch()
const activeTab= useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex gap-5 p-10'>
      {tabs.map(function(elm,idx){

        return(
          <button  className={` ${activeTab==elm ? ' bg-blue-900':'bg-gray-500'} transition px-5 py-5 rounded  uppercase cursor-pointer active:scale-95`}
         key={idx}
         onClick={()=>{
          dispatch(setactiveTab(elm))
         }}
         >
          {elm} 
          </button>
          )
      })}
    
    </div>
  )
}

export default Tabs