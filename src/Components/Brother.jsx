import React, { useContext } from 'react'
import { MoneyContext } from './Grandpa'

export default function Brother() {
  const [money] = useContext(MoneyContext);
  return (
    <div>
        <h2>Brother</h2>
        <h5>Granda has: {money} tk</h5>
    </div>
  )
}
