import React, { useContext, useEffect, useState } from 'react'
import { FaMinus, FaPlus, FaRupeeSign } from 'react-icons/fa'
import styles from './CartComponent.module.css'
import { Button, Rating } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import { IoBagCheckOutline } from 'react-icons/io5';
import { MyContext } from '../../../store/Context';


function CartComponent() {
       const context = useContext(MyContext);
     
       useEffect(()=>{
       context.setIsHeaderFooter(true);
       },[])
    const [count,setCount] = useState(1);

  return (
    <section className='container mt-3'>

         <div className={`row`}>
            <h4 className={`fs-3 fw-bold`}>Your Cart</h4>
            <p>There are <strong style={{color:'red'}}>3</strong> Products in your cart.</p>
            <div className={`col-9`}>
                
              <div className="table-responsive">
              <table className={`table w-100`}>
                    <thead className={`${styles['table-head']}`}>
                     <tr>
                     <th width='45%'>Product</th>
                        <th width="15%">Unit Price</th>
                        <th width="20%">Quantity</th>
                        <th width="15%">Subtotal</th>
                        <th width="5%">Remove</th>
                     </tr>
                    </thead>
                    <tbody className={`${styles['table-body']}`}>
                         <tr className=''>
                           <td>
                            <div className="d-flex gap-3">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/FH/IP/UF/45780338/1-litre-fortune-refined-sunflower-oil.jpg" alt="product_iamge" width={50} />
                                <div className="d-flex flex-column">
                                    <h6>dsfjfgo;jfddg</h6>
                                    <Rating value={5} readOnly/>
                                </div>
                            </div>
                           </td>
                           <td><FaRupeeSign/> 300</td>
                           <td>
                           <div className={`d-flex ${styles['counterCont']}`}>
                      <Button onClick={() => { if (count > 1) setCount(prevCount => prevCount - 1); }}><FaMinus /></Button>
                        <span>{count}</span>
                        <Button onClick={()=>{setCount(prev=>prev+1)}}><FaPlus /></Button>
                      </div>
                           </td>
                           <td><FaRupeeSign/> 4000</td>
                           <td><RxCross2 /></td>
                         </tr>
                         <tr className=''>
                           <td>
                            <div className="d-flex gap-3">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/FH/IP/UF/45780338/1-litre-fortune-refined-sunflower-oil.jpg" alt="product_iamge" width={50} />
                                <div className="d-flex flex-column">
                                    <h6>dsfjfgo;jfddg</h6>
                                    <Rating value={5} readOnly/>
                                </div>
                            </div>
                           </td>
                           <td><FaRupeeSign/> 300</td>
                           <td>
                           <div className={`d-flex ${styles['counterCont']}`}>
                      <Button onClick={() => { if (count > 1) setCount(prevCount => prevCount - 1); }}><FaMinus /></Button>
                        <span>{count}</span>
                        <Button onClick={()=>{setCount(prev=>prev+1)}}><FaPlus /></Button>
                      </div>
                           </td>
                           <td><FaRupeeSign/> 4000</td>
                           <td><RxCross2 /></td>
                         </tr>
                         <tr className=''>
                           <td>
                            <div className="d-flex gap-3">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/FH/IP/UF/45780338/1-litre-fortune-refined-sunflower-oil.jpg" alt="product_iamge" width={50} />
                                <div className="d-flex flex-column">
                                    <h6>dsfjfgo;jfddg</h6>
                                    <Rating value={5} readOnly/>
                                </div>
                            </div>
                           </td>
                           <td><FaRupeeSign/> 300</td>
                           <td>
                           <div className={`d-flex ${styles['counterCont']}`}>
                      <Button onClick={() => { if (count > 1) setCount(prevCount => prevCount - 1); }}><FaMinus /></Button>
                        <span>{count}</span>
                        <Button onClick={()=>{setCount(prev=>prev+1)}}><FaPlus /></Button>
                      </div>
                           </td>
                           <td><FaRupeeSign/> 4000</td>
                           <td><RxCross2 /></td>
                         </tr>
                         <tr className=''>
                           <td>
                            <div className="d-flex gap-3">
                                <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/FH/IP/UF/45780338/1-litre-fortune-refined-sunflower-oil.jpg" alt="product_iamge" width={50} />
                                <div className="d-flex flex-column">
                                    <h6>dsfjfgo;jfddg</h6>
                                    <Rating value={5} readOnly/>
                                </div>
                            </div>
                           </td>
                           <td><FaRupeeSign/> 300</td>
                           <td>
                           <div className={`d-flex ${styles['counterCont']}`}>
                      <Button onClick={() => { if (count > 1) setCount(prevCount => prevCount - 1); }}><FaMinus /></Button>
                        <span>{count}</span>
                        <Button onClick={()=>{setCount(prev=>prev+1)}}><FaPlus /></Button>
                      </div>
                           </td>
                           <td><FaRupeeSign/> 4000</td>
                           <td><RxCross2 /></td>
                         </tr>
                    </tbody>
                </table>
              </div>
            </div>
            <div className={`col-3`}>
              <div className="p-4 d-flex flex-column gap-3 shadow border rounded">
                <div className=" border-bottom border-secondary">
                  <h6 className='fw-bolder text-uppercase text-secondary'>Cart Totals</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span style={{color:'red'}}><FaRupeeSign/> 43555</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>Free</span>

                </div>
                <div className="d-flex justify-content-between">
                  <span>Estimate For</span>
                  <span>UK</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span><FaRupeeSign/> 40000.00</span>
                </div>
                <Button className={`${styles['btn-checkout']}`}> <span><IoBagCheckOutline /></span> Checkout</Button>
              </div>
            </div>
         </div>

    </section>
  )
}

export default CartComponent