import styled from '@emotion/styled'
import Link from 'next/link'

export default function Footer() {
  return (
    <StyledFooter>
      <span className="blogName">
        &quot;Carsss!&quot;
      </span>
      <Link href="/" passRef>
        <a className="twitter">
          <img src="/icons/twitter.svg" alt="twitter icon" width="24" height="24" />
        </a>
      </Link>
      <Link href="/" passRef >
        <a className="rss">
          <img src="/icons/rss.svg" alt="rss icon" width="24" height="24" />
        </a>
      </Link>
      <Link href="/all-articles">
        <a className="allArticlesLink">
          All articles
        </a>
      </Link>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  grid-area: 4 / 1 / 5 / 4;
  color: white;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin: 1em;
  }
  > a {
    height: 24px;
    &:hover {
      opacity: 0.7;
    }
  }
  > .allArticlesLink {
    display: none;
    color: white;
  }

  @media only screen and (max-width: 1216px) {
    grid-area: 4 / 1 / 5 / 2;
  }

  @media only screen and (max-width: 768px) {
    > .blogName {
      margin: 1em 0 1em 0;
    }
    > .twitter, > .rss, > .allArticlesLink {
      margin: 1em 0 1em 1em;
    }
    > .allArticlesLink {
      display: inline;
    }
  }
`
