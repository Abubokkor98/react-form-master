import React from 'react'
import Cousin from './Cousin'

export default function Aunty() {
  return (
    <div>
        <h2>Aunty</h2>
        <section className='flex'>
        <Cousin name={'maisha'}></Cousin>
        <Cousin name={'Humayra'}></Cousin>
        </section>
    </div>
  )
}
