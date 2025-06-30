import React from 'react'

function AdditionaInfo() {

  const tableData = {
    first:'1',
    second:'2',
    third:'3',
    fourth:'4',
    fifth:'5',
    sixth:'6',
    seventh:'7'
  }
  return (
    <div className='table-responsive mt-5 '>
      <table class="table table-bordered ">
  
  <tbody>
   
   {
    Object.keys(tableData).map((item,index)=>{
      return (
        <tr>
        <th style={{width:'50%',color:'#252525',background:'transparent',padding:'10px'}}>{item}</th>
        <td style={{width:'50%',color:'gray',background:'transparent',padding:' 10px'}}>{tableData[item]}</td>
       </tr>
      )
    })
   }
  </tbody>
</table>
    </div>
  )
}

export default AdditionaInfo