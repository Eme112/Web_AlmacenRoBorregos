import React from 'react'


function MaterialInfo() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <table className='table'> 
            <thead className='table-primary'>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Nombre</th>
                <th>DataSheet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image</td>
                <td>0001</td>
                <td>Amplificador Operacional (OP-AMP) TL084</td>
                <td><a href='https://www.alldatasheet.com/view.jsp?Searchword=Tl084%20datasheet&gclid=Cj0KCQjw2_OWBhDqARIsAAUNTTGiNdmurUzV_lpLDghoU-ccrEg1m6AUfZmrpuBUKSMF8yjgn37AILwaAvjUEALw_wcB'>Datasheet</a></td>
              </tr>
              <tr>
                <td>Image</td>
                <td>0002</td>
                <td>Amplificador Operacional (OP-AMP) TL081</td>
                <td><a href='https://www.alldatasheet.com/view.jsp?Searchword=Tl081%20datasheet&gclid=Cj0KCQjw2_OWBhDqARIsAAUNTTF5AQRS1FOSzzwOVGvwn0oHIQ5ngln24-CX1GtzIQCD_n0OaUkbEvIaAr2SEALw_wcB'>Datasheet</a></td>
              </tr>
              <tr>
                <td>Image</td>
                <td>0003</td>
                <td>Compuerta NAND cuadruple con dos entradas SN7400 </td>
                <td><a href='https://www.ti.com/product/SN7400?utm_source=google&utm_medium=cpc&utm_campaign=asc-null-null-GPN_EN-cpc-pf-google-wwe&utm_content=SN7400&ds_k=SN7400+Datasheet&DCM=yes&gclid=Cj0KCQjw2_OWBhDqARIsAAUNTTH-Tgq_CSdQ4JXOzyGiA4oQeQLx7hlEfxWMYIyGe0NIqckw2wSh0ocaAkveEALw_wcB&gclsrc=aw.ds'>Datasheet</a></td>
              </tr>
              <tr>
                <td>Image</td>
                <td>0004</td>
                <td>Compuerta OR cuadruple con dos entradas SN74HC32 </td>
                <td><a href='https://www.ti.com/product/SN74HC32?utm_source=google&utm_medium=cpc&utm_campaign=asc-null-null-GPN_EN-cpc-pf-google-wwe&utm_content=SN74HC32&ds_k=SN74HC32&DCM=yes&gclid=Cj0KCQjw2_OWBhDqARIsAAUNTTGb8tOCFKxOCx5MY1lwYn9NAgCPe6MKk-8Mb1C6eBQNCth5IXLlBzUaAiflEALw_wcB&gclsrc=aw.ds'>Datasheet</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MaterialInfo