import React, { useState } from 'react'
import { Inputs, List } from './components'

export const RealizarChance = () => {

  const [apuestas, setApuestas] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center bg-blue-900 w-screen h-screen'>
      <h1 className='text-yellow-500 text-8xl p-5 font-bold lasombraxd'>Gane Inc.</h1>

      <Inputs apuestas={apuestas} setApuestas={setApuestas} total={total} setTotal={setTotal}></Inputs>

      <h3 className='text-white text-lg font-semibold p-3'>El Total es: {total} </h3>

      <div className='text-white text-lg font-semibold p-2'>
          <List apuestas={apuestas}></List>
      </div>

    </div>
  )
}
