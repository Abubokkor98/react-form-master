import React, { useContext } from 'react'
import Cousin from './Cousin'
import { MoneyContext } from './Grandpa'

export default function Aunty() {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
        <h2>Aunty</h2>
        <section className='flex'>
        <Cousin name={'maisha'}></Cousin>
        <Cousin name={'Humayra'}></Cousin>
        </section>
        <h5>Money: {money} </h5>
        <button onClick={()=>setMoney(money + 1000)}>Add 1000tk</button>
    </div>
  )
}
