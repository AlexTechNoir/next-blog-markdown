import Link from 'next/link'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export default function ArticlePreview({ title, img, date, slug }) {
  return (
    <Link href={`/posts/${encodeURIComponent(slug)}`} passHref>
      <StyledLink img={img} id="preview">
        <div>
          <div>
            <div></div>
            <h1 id="title">{title}</h1>
            <div id="date">
              <time dateTime={date.substring(0, 10)}>{date.substring(0, 10)}</time>
            </div>
          </div>
        </div>
      </StyledLink>
    </Link>
  )
}

const wrooom = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(-5px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  75% {
    transform: translate(0px, -5px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`

// Additional styles in index.js file
const StyledLink = styled.a`
  margin: 1em;  
  max-width: 1024px;
  width: 100%;
  height: 250px;
  color: white;
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.img})`};    
    background-size: cover;
    background-position: center;
    > div {
      position: absolute;      
      width: 50%;
      height: 100%;         
      > :first-child {
        width: 50%;
        height: 250px;
      }
      > h1 {       
        font-size: 1.5em;
        margin-bottom: 1em;
      }
    }
  }
  &:hover {
    animation: ${wrooom} .2s 2 linear !important;
  }
`
