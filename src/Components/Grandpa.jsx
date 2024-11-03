import React from 'react'
import Dad from './Dad'
import Uncle from './Uncle'
import Aunty from './Aunty'
import './grandpa.css'

export default function Grandpa() {
  return (
    <div className='grandpa'>
        <h2>Grandpa</h2>
      <section className='flex'> 
      <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
    </div>
  )
}
