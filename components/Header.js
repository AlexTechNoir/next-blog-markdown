import styled from '@emotion/styled'
import Link from 'next/link'

export default function Header() {
  return (
    <StyledHeader className="header">
      <Link href="/">
        <a className="logo">
          <img src="/img/wheel.png" alt="logo" />
          Carsss!
        </a>
      </Link>
      <Link href="/all-articles">
        <a className="allArticlesLink">
          All articles
        </a>
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  box-sizing: border-box; 
  grid-area: 1 / 2 / 2 / 3;  
  padding: 1em;
  color: white;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  > .logo {
    font-size: 3rem;
    box-sizing: border-box !important;
    font-family: 'Faster One';
    text-decoration: none;
    color: white;
    > img {
      height: 100%;
      width: 100px;
    }
  }
  > .allArticlesLink {
    font-family: 'Titillium Web';
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    &:hover {
      opacity: .8;
    }
  }

  @media only screen and (max-width: 1216px) {
    grid-template-columns: 100%;
    grid-area: 1 / 1 / 2 / 2;
  }

  @media only screen and (max-width: 768px) {
    > .allArticlesLink {
      display: none;
    }
  }

  @media only screen and (max-width: 428px) {
    > .logo {
      font-size: 2rem;
      > img {
        height: 100%;
        width: 75px;
      }
    }
  }
`