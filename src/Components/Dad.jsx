import React from 'react'
import Myself from './Myself'
import Brother from './Brother'
import Sister from './Sister'

export default function Dad() {
  return (
    <div>
        <h2>Dad</h2>
        <section className='flex'>
        <Myself></Myself>
        <Brother></Brother>
        <Sister></Sister>
        </section>
    </div>
  )
}
