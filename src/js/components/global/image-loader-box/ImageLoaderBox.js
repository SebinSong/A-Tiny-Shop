import React, {
  useState,
  useEffect,
  useRef
} from 'react'

import './ImageLoaderBox.scss'

function ImageLoaderBox ({
  src = '',
  alt = '',
  imageWidth = 100,
  imageMinHeight = 100,
  classes = '',
  delay = 100 // intentional delay for image load - good user experience?
}) {
  // ref
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // state
  const [isLoaded, setIsLoaded] = useState(false);

  // effect
  useEffect(() => { // on component mount
    const containerStyle = containerRef.current.style
    const onLoad = () => {
      setTimeout(() => {
        imgRef.current &&
          setIsLoaded(true);
      }, delay)
    }    
    containerStyle.setProperty('--image-width', `${imageWidth}px`);
    containerStyle.setProperty('--image-min-height', `${imageMinHeight}px`)

    imgRef.current.addEventListener('load', onLoad);
  }, []);

  // etc
  const additionalClasses = [
    classes,
    isLoaded && 'is-loaded'
  ].filter(Boolean).join(' ');

  return (
    <span ref={containerRef}
      className={`image-loader-box ${additionalClasses}`}>
      <span className="image-loader-box__loading-animation" />

      <img ref={imgRef}
        src={src}
        alt={alt} />
    </span>
  )
}

export default ImageLoaderBox;