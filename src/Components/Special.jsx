import React, { useContext } from 'react'
import { AssetContext } from './Grandpa'

export default function Special() {
    const Asset = useContext(AssetContext)
  return (
    <div>
        <h2>Special</h2>
        <h5>Has: {Asset}</h5>
    </div>
  )
}
