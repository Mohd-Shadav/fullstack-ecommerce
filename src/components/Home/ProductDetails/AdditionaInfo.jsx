import React from 'react'

function AdditionaInfo({product}) {


  return (
    <div className='table-responsive mt-5 '>
      <table class="table table-bordered ">
  
  <tbody>
   
  
        <tr>
        <th style={{width:'50%',color:'#252525',background:'transparent',padding:'10px'}}>Product Name</th>
        <td style={{width:'50%',color:'gray',background:'transparent',padding:' 10px'}}>{product.name}</td>
       </tr>
          <tr>
        <th style={{width:'50%',color:'#252525',background:'transparent',padding:'10px'}}>Brand</th>
        <td style={{width:'50%',color:'gray',background:'transparent',padding:' 10px'}}>{product.brand.toUpperCase()}</td>
       </tr>
          <tr>
        <th style={{width:'50%',color:'#252525',background:'transparent',padding:'10px'}}>Category</th>
        <td style={{width:'50%',color:'gray',background:'transparent',padding:' 10px'}}>{product.category.categoryname}</td>
       </tr>
          <tr>
        <th style={{width:'50%',color:'#252525',background:'transparent',padding:'10px'}}>Stock Left</th>
        <td style={{width:'50%',color:'gray',background:'transparent',padding:' 10px'}}>{product.quantity>1 ? product.quantity + " units" : product.quantity+" unit"} </td>
       </tr>
        
                <tr>
        <th style={{width:'50%',color:'#252525',background:'transparent',padding:'10px'}}>Weight</th>
        <td style={{width:'50%',color:'gray',background:'transparent',padding:' 10px'}}>{product.physicalSpecs.weight} Grams</td>
       </tr>
         <tr>
        <th style={{width:'50%',color:'#252525',background:'transparent',padding:'10px'}}>Original Price</th>
        <td style={{width:'50%',color:'gray',background:'transparent',padding:' 10px'}}>₹ {product.originalprice} </td>
       </tr>
          <tr>
        <th style={{width:'50%',color:'#252525',background:'transparent',padding:'10px'}}>Discounted Price</th>
        <td style={{width:'50%',color:'gray',background:'transparent',padding:' 10px'}}>₹ {product.discountprice}</td>
       </tr>
       
   
  </tbody>
</table>
    </div>
  )
}

export default AdditionaInfo