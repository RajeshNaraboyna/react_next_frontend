import React from 'react'

interface ImageComponentProps {
  src: string
  height: string
  width: string
}

const ImageComponent = (props: ImageComponentProps) => {
  const { src, width, height } = props
  return <img data-testid="image" src={src} width={width} height={height}></img>
}
export default ImageComponent
