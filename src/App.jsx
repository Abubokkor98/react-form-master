import { useState } from 'react'
import './App.css'


import SimpleForm from './Components/SimpleForm'
import StatefulForm from './Components/StatefulForm'
import RefForm from './Components/RefForm'
import CustomHookForm from './Components/CustomHookForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      <CustomHookForm></CustomHookForm>
    </>
  )
}

export default App
