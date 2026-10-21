import React from 'react'
import Searchbar from '../components/Searchbar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
const HOme = () => {
     const { query} =
    useSelector((store) => store.search)
  return (
    <div>
    <Navbar/>
        <Searchbar/> 
    {query!= '' ? 
    <div>
        <Tabs/>
        <ResultGrid/>
    </div>
    : ''}
    </div>
  )
}

export default HOme