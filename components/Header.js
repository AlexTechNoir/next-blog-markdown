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
      <Link href="/all-articles">
        <a>
          All articles
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
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  > :last-child {
    font-family: 'Titillium Web';
    font-size: 2.5rem;
    font-weight: bold;
    &:hover {
      opacity: .8;
    }
  }
`