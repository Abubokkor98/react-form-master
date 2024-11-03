import React from 'react'
import Friend from './Friend'

export default function Cousin({name}) {
  return (
    <div>
        <h2>Cousin</h2>
        <h5>{name}</h5>
        <section>
          {name==='Efat' && <Friend></Friend>}
        </section>
    </div>
  )
}
