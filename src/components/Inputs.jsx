import React, { useState } from 'react'

export const Inputs = ({ total, setTotal, apuestas, setApuestas }) => {

  const [numero, setNumero] = useState("")
  const [costo, setCosto] = useState("")
  const [error, setError] = useState("")

  const manejarNumero = (numero) => {
    setNumero(numero)
  }

  const manejarCosto = (costo) => {
    setCosto(Number(costo))
  }

  const AddApuestas = () => {
    if (numero.length > 2 && numero.length < 5) {
      setError("")
    } else {
      setError("Alerta: El número debe ser de minimo 3, maximo 4 números")
      return
    }
    if(Number(costo) > 0 && costo.length != 0){
      setCosto("")
    }else{
      setError("Alerta: No es un valor válido")
      return
    }

    if(apuestas.find(x => x.numero === numero)){
      setError("Alerta: Ese numero ya está")
      return
    }

    setApuestas([...apuestas, { numero: numero, costo: costo }])
    setNumero("")
    setCosto("")
    setTotal(Number(total) + Number(costo))
  }

  return (
    <div className='flex flex-col gap-3'>
        <div className='self-center'>
          <h3 className='text-white text-lg font-semibold'>{error}</h3>
        </div>
        <div className='grid grid-rows-2 grid-cols-2 gap-2  text-lg font-semibold'>
          <label className='justify-self-center text-white  border-blue-800 w-2/3 border-4 bg-blue-700 px-8 py-1 rounded-xl' htmlFor="numberC">Numero: </label>
          <input value={numero} onChange={(e) => manejarNumero(e.target.value)} type="number" name="numberC" id="numberC" />

          <label className='justify-self-center text-white  border-blue-800 w-2/3 border-4 bg-blue-700 px-11 py-1 rounded-xl' htmlFor="costC">Valor: </label>
          <input value={costo} onChange={(e) => manejarCosto(e.target.value)} type="number" name="costC" id="costC" />
        </div>

        <div className='self-center text-white text-lg font-semibold p-2 bg-yellow-500 rounded-xl hover:bg-yellow-600'>
          <button onClick={() => AddApuestas()} type="submit">Agregar</button>
        </div>
    </div>
  )
}
