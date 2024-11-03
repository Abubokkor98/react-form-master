import React from 'react'
import Cousin from './Cousin'

export default function Uncle() {
  return (
    <div>
        <h2>uncle</h2>
    
         <section className='flex'>
         <Cousin name={'Efat'}></Cousin>
         <Cousin name={'Buchu'}></Cousin>
         </section>
    </div>
  )
}
