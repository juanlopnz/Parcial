import React, { useState } from 'react'

export const RealizarChance = () => {

  const [numero, setNumero] = useState("")
  const [costo, setCosto] = useState("")
  const [apuestas, setApuestas] = useState([])

  const manejarNumero = (Numero) => {
    setNumero(Numero.target.value)
  }

  const manejarCosto = (Costo) => {
    setCosto(Costo.target.value)
  }

  const[value, setValue] = useState(name)

  const AddApuestas = () => {
    setApuestas([...apuestas, {numero: numero, costo: costo}])
    setNumero("")
    setCosto("")
  }

  


  return (
    <>
      <h1>Gane Inc.</h1>
      <div>
        <div>
          <label htmlFor="numberC">Numero: </label>
          <input value={numero} onChange={(e) => manejarNumero(e)} type="text" name="numberC" id="numberC" />
        </div>

        <div>
          <label htmlFor="costC">Valor: </label>
          <input value={costo} onChange={(e) => manejarCosto(e)} type="text" name="costC" id="costC" />
        </div>

        <div>
          <button onClick={() => AddApuestas()} type="submit">Agregar</button>
        </div>
      </div>
      
      <h3>EL Total es: </h3>

      <h3>
        <ol>
          {
            apuestas.map( (element, key)  => {
              return <li key={key}>{element.numero}  : $ {element.costo}</li>;
            })
          }
        </ol>
      </h3>

    </>
  )
}
