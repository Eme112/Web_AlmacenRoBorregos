import React from 'react'
import Quantity from '../Quantity'

function ReservationForm() {
  return (
    <div>
      <br/>
      <p>
        Fecha de inicio
        <input class="form-control" id="FechaInicio"/>
      </p>
      <p>
        Fecha de retorno
        <input class="form-control" id="FechaRetorno"/>
      </p>
      <p>
        Cantidad
        <Quantity />
      </p>
      <p>
        Motivo
        <input class="form-control" id="Motivo" placeholder="Escribe aquí el motivo de la reserva de material"/>
      </p>
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        &nbsp; Estoy al tanto de los lineamientos de préstamo de material del laboratorio
      </label>
    </div>
  )
}

export default ReservationForm