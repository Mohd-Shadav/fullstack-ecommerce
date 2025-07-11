import React, { useEffect, useRef, useState } from 'react'
import styles from './ImageDisplayer.module.css'

function ImageDisplayer({ thumbnail, gallery }) {
  const imageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [imageContent, setImageContent] = useState([]);
  const [imageBorder, setImageBorder] = useState('first');

  useEffect(() => {
    if (thumbnail || gallery?.[0]) {
      setImageSrc(thumbnail ? thumbnail : gallery[0]);

      const updatedContent = [
        { name: 'first', src: thumbnail },
        { name: 'second', src: gallery?.[0] },
        { name: 'third', src: gallery?.[1] }
      ].filter(item => item.src); // Optional: filter out undefined/null

      setImageContent(updatedContent);
    }
  }, [thumbnail, gallery]);

  const handleZoom = (e) => {
    let { left, top, width, height } = imageRef.current.getBoundingClientRect();
    let x = ((e.clientX - left) / width) * 100;
    let y = ((e.clientY - top) / height) * 100;

    imageRef.current.style.transformOrigin = `${x}% ${y}%`;
    imageRef.current.style.transform = "scale(2)";
  };

  const resetZoom = () => {
    imageRef.current.style.transform = "scale(1)";
  };

  const handleFitImage = (item) => {
    setImageSrc(item.src);
    setImageBorder(item.name);
  };

  return (
    <div className={styles['imagesColumnContainer']}>
      <div
        onMouseMove={handleZoom}
        onMouseLeave={resetZoom}
        className={styles['mainImageCont']}
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden"
        }}
      >
        <img ref={imageRef} src={imageSrc} alt="main-product" />
      </div>

      <div className={styles['allImages']}>
        {imageContent.map((item) => (
          <div
            key={item.name}
            className={imageBorder === item.name ? styles[`${item.name}Image`] : ''}
          >
            <img onClick={() => handleFitImage(item)} src={item.src} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageDisplayer;
