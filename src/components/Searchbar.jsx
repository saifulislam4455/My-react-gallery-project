import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setquery } from '../REDUX/feature/searchslice'
const Searchbar = () => {
    const [text, settext] = useState('')
    const dispatch= useDispatch( )
    const submithandlar=(e)=>{
        e.preventDefault()
       dispatch(setquery(text))
        settext('')
        
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            submithandlar(e)
        }} className='flex p-10 gap-5 bg-gray-800'>
            <input
            value={text}
            onChange={(e)=>{
                settext(e.target.value)
                
            }}
            required
            className='w-full border-2 px-4 py-2 text-xl rounded  outline-none'
            type="text" placeholder='Search anything...' />
            <button
            className='cursor-pointer border-2 px-4 py-2 text-xl rounded  outline-none active:scale-95'
            >search </button>
        </form>
    </div>
  )
}

export default Searchbar