import styled from '@emotion/styled'
import Link from 'next/link'

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <img src="/img/wheel.png" alt="" />
          Carsss!
        </a>
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  font-family: 'Faster One';
  grid-area: 1 / 2 / 2 / 3;
  font-size: 2rem;
  padding: .5em;
  color: white;
  > a {
    text-decoration: none;
    color: white;
    > img {
      height: 100%;
      width: 100px;
    }
  }
`