import React, { useRef, useState } from 'react'
import styles from './ImageDisplayer.module.css'

function ImageDisplayer() {
  const imageRef = useRef(null);
  const [imageSrc,setImageSrc] = useState('https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg')

  const imageContent = [
    {
      name:'first',
      src:"https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg"
    },
    {
      name:'second',
      src:"https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
    },
    {
      name:'third',
      src:"https://api.spicezgold.com/download/file_1734690981299_c56f7a00-e9c5-43dc-8288-190cfc0fef3e1714702040062RARERABBITMenComfortOpaqueCasualShirt3.jpg"
    }
  ]
  const [imageBorder,setImageBorder] = useState('first');
    
        const handleZoom = (e) => {
       
          let { left, top, width, height } = imageRef.current.getBoundingClientRect();
          let x = ((e.clientX - left) / width) * 100;
          let y = ((e.clientY - top) / height) * 100;
      
          imageRef.current.style.transformOrigin = `${x}% ${y}%`;
          imageRef.current.style.transform = "scale(2)"; // Adjust scale as needed
       
       
          
          
        };
      
        const resetZoom = () => {
          imageRef.current.style.transform = "scale(1)"; // Reset on mouse leave
        };
    
        const handleFitImage = (item)=>{
             
          setImageSrc(item.src);
          setImageBorder(item.name);
        }
  return (


          <div className={styles['imagesColumnContainer']}>
                  <div  onMouseMove={handleZoom} onMouseLeave={resetZoom}
         className={`${styles['mainImageCont']}`} style={{backgroundSize: "100%", 
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                overflow: "hidden"}} >
                      <img ref={imageRef} src={imageSrc} alt="image-shirt1" />
                    
                    </div>
                    <div className={styles['allImages']}>
                    
                 {   imageContent.map((item) => {
                      return (
                        <div className={imageBorder===item.name ? styles[`${item.name}Image`]:""}>
                        <img onClick={()=>handleFitImage(item)}  src={item.src} alt="image-shirt1" />
                       
                        </div>
                      )
                    })
                  }
                     
                    </div>
                  </div>

  )
}

export default ImageDisplayer