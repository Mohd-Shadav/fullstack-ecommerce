import { Button, Rating } from '@mui/material'
import React from 'react'

function ReviewsComponent() {

    const reviewObject = [
        {
            name:'sahil',
            date:'12-10-2025',
            review:'hello'
        },
        {
            name:'sahil',
            date:'12-10-2025',
            review:'hello'
        }
        ,
        {
            name:'sahil',
            date:'12-10-2025',
            review:'hello'
        }
        ,
        {
            name:'sahil',
            date:'12-10-2025',
            review:'hello'
        }
        ,
        {
            name:'sahil',
            date:'12-10-2025',
            review:'hello'
        }
        ,
        {
            name:'sahil',
            date:'12-10-2025',
            review:'hello'
        }
    ]

  return (
    <div className='mt-5'>
        <h4 className='fs-6 fw-bold'>Customer questions & answers</h4>

        <div className={`d-flex flex-column`}>

            {reviewObject.map((item)=>{
                return (
                    <div className={`d-flex justify-content-between py-4`} style={{borderBottom:'1px solid gray'}}>
                <div className={`d-flex flex-column gap-2`}>
                    <span>{item.name}</span>
                    <span>{item.date}</span>
                    <span>{item.review}</span>
                </div>
                <div className="">
                    <Rating value={5} readOnly/>
                </div>
            </div>
                )
            })

            }

        </div>

        <div className={`d-flex flex-column mt-5 gap-4 w-50`}>
        <h4 className='fs-6 fw-bold'>Add Review</h4>
        <textarea name="" rows={5} cols={10} placeholder='write a review' style={{border:'none',outline:'',padding:'1rem',borderRadius:'10px'}} className={`focus-ring`}></textarea>
        <Rating value={1}/>
        <Button style={{width:'50%',background:'#3d8bfd',color:'#fff'}}>Submit</Button>
        </div>
    </div>
  )
}

export default ReviewsComponent