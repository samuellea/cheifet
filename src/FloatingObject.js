import React, { useState, useEffect } from 'react';

function FloatingObject({ images }) {
  const [src, setSrc] = useState(
    images[Math.floor(Math.random() * images.length)]
  );

  // useEffect(() => {
  //   const getRandomInterval = () => {
  //     if (window.innerWidth <= 768) {
  //       return Math.floor(Math.random() * (20000 - 10000) + 10000);
  //     }
  //     if (window.innerWidth > 768) {
  //       return Math.floor(Math.random() * (15000 - 8000) + 8000);
  //     }
  //   };
  //   const changeImage = () => {
  //     setSrc(images[Math.floor(Math.random() * images.length)]); // Pick a new random image
  //     const nextInterval = getRandomInterval();
  //     setTimeout(changeImage, nextInterval); // Schedule next change
  //   };

  //   const initialTimeout = getRandomInterval();
  //   const timeout = setTimeout(changeImage, initialTimeout);

  //   return () => clearTimeout(timeout); // Cleanup on unmount
  // }, [images]);

  return (
    <div className="floating-object">
      <img src={src} alt="Floating" />
    </div>
  );
}

export default FloatingObject;
