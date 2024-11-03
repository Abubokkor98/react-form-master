import React, { useContext } from 'react'
import Cousin from './Cousin'
import { AssetContext } from './Grandpa'

export default function Uncle() {
  const gift = useContext(AssetContext);
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
