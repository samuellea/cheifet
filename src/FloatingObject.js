import React, { useState, useEffect } from 'react';

function FloatingObject({ images }) {
  const [src, setSrc] = useState(
    images[Math.floor(Math.random() * images.length)]
  );

  const getRandomInterval = () =>
    Math.floor(Math.random() * (15000 - 8000) + 8000);

  useEffect(() => {
    const changeImage = () => {
      setSrc(images[Math.floor(Math.random() * images.length)]); // Pick a new random image
      const nextInterval = getRandomInterval();
      setTimeout(changeImage, nextInterval); // Schedule next change
    };

    const initialTimeout = getRandomInterval();
    const timeout = setTimeout(changeImage, initialTimeout);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [images, getRandomInterval]);

  return (
    <div className="floating-object">
      <img src={src} alt="Floating" />
    </div>
  );
}

export default FloatingObject;
