import React, { useContext } from 'react'
import { AssetContext } from './Grandpa'

export default function Friend() {
    const gift = useContext(AssetContext);
  return (
    <div>
        <h2>Friend</h2>
        <h5>has: {gift}</h5>

    </div>
  )
}
