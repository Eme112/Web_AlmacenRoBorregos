import React from 'react'

function Quantity() {
  return (
    <div class="center">
        <div class="input-group">
            <span class="input-group-btn">
                <button type="button" class="btn btn-dark" data-field="quant[2]">
                    -
                </button>
            </span>
            <input type="text" name="quant[2]" class="form-control input-number" value="1" min="1" max="100"/>
            <span class="input-group-btn">
                <button type="button" class="btn btn-dark" data-field="quant[2]">
                    +
                </button>
            </span>
        </div>
        <p></p>
    </div>
  )
}

export default Quantity