import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'

export default function ProgressiveImage({ post }) {
  const previewImg = post.imgThumbnail

  const smallImg = post.imgSmall
  const smallImgWidth = post.imgSmallWidth

  const mediumImg = post.imgMid
  const mediumImgWidth = post.imgMidWidth

  const largeImg = post.imgBig
  const largeImgWidth = post.imgBigWidth

  const altText = `Cover Image for ${post.title}`

  const [ isLoading, setIsLoading ] = useState(true)

  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current.complete) {
      setIsLoading(false)
    }
    
    isFirstRun.current.addEventListener('load', () => setIsLoading(false))
  }, [])

  return (
    <WrappingDiv isLoading={isLoading}>
      <img 
        src={previewImg}
        alt={altText}
        width="1024" 
        height="576" 
      />
      <picture>
        <source
          srcSet={ `${smallImg} ${smallImgWidth}w, 
                    ${mediumImg} ${mediumImgWidth}w, 
                    ${largeImg} ${largeImgWidth}w` }
          type="image/jpeg"
        />        
        <img 
          ref={isFirstRun}      
          src={smallImg}
          srcSet={ `${smallImg} ${smallImgWidth}w, 
                    ${mediumImg} ${mediumImgWidth}w, 
                    ${largeImg} ${largeImgWidth}w` }
          sizes={`(max-width: ${smallImgWidth}px) ${smallImgWidth}px, 
                  (max-width: ${mediumImgWidth}px) ${mediumImgWidth}px, 
                  ${largeImgWidth}px`}
          alt={altText}
          width="1024" 
          height="576" 
        />
      </picture>
    </WrappingDiv>
  )
}

const WrappingDiv = styled.div`
  grid-area: 2 / 1 / 3 / 4;
  margin-bottom: 1em;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  transition: 0.5s filter linear;
  filter: ${props => props.isLoading ? 'blur(30px)' : ''};
  img {
    width: 100%;
    height: auto;
  }
  picture > img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }
`