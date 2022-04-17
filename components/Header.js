import styled from '@emotion/styled'
import Link from 'next/link'

export default function Header() {
  return (
    <StyledHeader className="header">
      <Link href="/">
        <a>
          <img src="/img/wheel.png" alt="logo" />
          Carsss!
        </a>
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  box-sizing: border-box; 
  grid-area: 1 / 2 / 2 / 3;
  font-size: 3rem;
  padding: .5em;
  color: white;
  > a {
    box-sizing: border-box !important;
    font-family: 'Faster One';
    text-decoration: none;
    color: white;
    > img {
      height: 100%;
      width: 100px;
    }
  }
`