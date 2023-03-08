import React from 'react'

export const List = ({ apuestas }) => {
  return (
    <div className='flex flex-col gap-2'>
      {
        apuestas.map((element, key) => {
          return (
          <div key={key} className='flex gap-4 border-blue-800  border-b-4 bg-blue-700 px-10 py-1 rounded-3xl'>
            <span className='font-extrabold'>{key+1} ) </span> 
            <span>{element.numero}: </span>
            <span>${element.costo}</span>
          </div>
          )
        })
      }
    </div>
  )
}
