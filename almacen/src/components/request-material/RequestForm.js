import React from 'react'
import Quantity from '../Quantity'

function RequestForm() {
  return (
    <div>
      <br/>
      <p>
        Nombre del material
        <input class="form-control" id="NombreMaterial"/>
      </p>
      <p>
        Cantidad a solicitar 
        <Quantity />
      </p>
      <p>
        Motivo
        <input class="form-control" id="Motivo" placeholder="Escribe aquí el motivo de la solicitud de compra"/>
      </p>
      <p>
        Link de compra 1
        <input class="form-control" id="Link1"/>
      </p>
      <p>
        Link de compra 2
        <input class="form-control" id="Link2"/>
      </p>
    </div>
  )
}

export default RequestForm